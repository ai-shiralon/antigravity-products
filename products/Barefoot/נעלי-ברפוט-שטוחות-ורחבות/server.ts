import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;
const DATA_DIR = path.join(process.cwd(), "data");
const ORDERS_FILE = path.join(DATA_DIR, "orders.json");

// Ensure data directory and orders file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(ORDERS_FILE)) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2), "utf-8");
}

app.use(express.json());

// Helper to read orders
function readOrders() {
  try {
    const data = fs.readFileSync(ORDERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading orders file:", error);
    return [];
  }
}

// Helper to write orders
function writeOrders(orders: any[]) {
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing orders file:", error);
  }
}

// Secret Passcode for Admin Actions
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "1234";

// Middleware to check admin passcode
const requireAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const passcode = req.headers["x-admin-passcode"] || req.query.passcode;
  if (passcode === ADMIN_PASSCODE) {
    next();
  } else {
    res.status(401).json({ error: "Passcode admin שגוי או חסר" });
  }
};

// --- API ROUTES ---

// 0. Get PayPal Configuration from server environment variables
app.get("/api/paypal-config", (req, res) => {
  res.json({
    paypalClientId: process.env.VITE_PAYPAL_CLIENT_ID || process.env.PAYPAL_CLIENT_ID || "",
    paypalHostedButtonId: process.env.VITE_PAYPAL_HOSTED_BUTTON_ID || process.env.PAYPAL_HOSTED_BUTTON_ID || "",
    paypalCustomUrl: process.env.VITE_PAYPAL_CUSTOM_URL || process.env.PAYPAL_CUSTOM_URL || ""
  });
});

// 1. Submit a new order
app.post("/api/orders", (req, res) => {
  const {
    fullName,
    phoneNumber,
    city,
    address,
    email,
    paymentMethod,
    items,
    totalPrice,
    paymentDetails
  } = req.body;

  if (!fullName || !phoneNumber || !city || !address) {
    return res.status(400).json({ error: "שדות חובה חסרים" });
  }

  const orders = readOrders();
  const newOrder = {
    id: "ORD-" + Math.floor(Math.random() * 900000 + 100000),
    fullName,
    phoneNumber,
    city,
    address,
    email: email || "",
    paymentMethod,
    items: items || [],
    totalPrice,
    paymentDetails: paymentDetails || {},
    status: "חדש", // "חדש" | "בטיפול" | "נשלח" | "בוטל"
    trackingNumber: "",
    createdAt: new Date().toISOString()
  };

  orders.unshift(newOrder);
  writeOrders(orders);

  res.status(201).json({ success: true, order: newOrder });
});

// 2. Get all orders (Admin only)
app.get("/api/orders", requireAdmin, (req, res) => {
  const orders = readOrders();
  res.json({ orders });
});

// 3. Update order status or tracking number (Admin only)
app.put("/api/orders/:id", requireAdmin, (req, res) => {
  const { id } = req.params;
  const { status, trackingNumber } = req.body;

  const orders = readOrders();
  const index = orders.findIndex((o: any) => o.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "הזמנה לא נמצאה" });
  }

  if (status !== undefined) {
    orders[index].status = status;
  }
  if (trackingNumber !== undefined) {
    orders[index].trackingNumber = trackingNumber;
  }

  writeOrders(orders);
  res.json({ success: true, order: orders[index] });
});

// 4. Delete/Archive order (Admin only)
app.delete("/api/orders/:id", requireAdmin, (req, res) => {
  const { id } = req.params;
  let orders = readOrders();
  const index = orders.findIndex((o: any) => o.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "הזמנה לא נמצאה" });
  }

  orders.splice(index, 1);
  writeOrders(orders);
  res.json({ success: true, message: "ההזמנה נמחקה בהצלחה" });
});

// --- VITE MIDDLEWARE SETUP FOR DEV VS STATIC PROD ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
