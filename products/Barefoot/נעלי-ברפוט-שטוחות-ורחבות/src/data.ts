export interface ColorOption {
  id: string;
  name: string;
  englishName: string;
  hex: string;
  imgUrl: string;
}

export interface SizeRecommendation {
  size: number;
  euSize: string;
  footLengthCm: number;
  note: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: "Maximize2" | "Wind" | "ShieldAlert" | "CheckCircle2" | "Palette" | "CalendarDays" | "Sparkles" | "Activity";
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  color: string;
  size: number;
  text: string;
  tags: string[];
  isVerified: boolean;
  avatarSeed: string;
}

export interface Spec {
  key: string;
  value: string;
}

export const PRODUCT_DATA = {
  name: "Wide Barefoot Flats Shoes",
  hebrewName: "נעלי ברפוט שטוחות ורחבות",
  tagline: "נוחת מקסימלית וחופש תנועה אמיתי לכל יום",
  storeName: "Barefoot Official Store",
  positiveFeedback: "96.4%",
  followers: "23.8K",
  soldCount: 95,
  rating: 4.9,
  reviewsCount: 15,
  originalPrice: 230,
  salePrice: 170,
  shippingCost: 0,
  deliveryDateEstimate: "תוך שבועיים",
  returnPeriod: 15,
  colors: [
    {
      id: "dark-grey",
      name: "אפור כהה",
      englishName: "Dark Grey",
      hex: "#555555",
      imgUrl: "https://ae-pic-a1.aliexpress-media.com/kf/S4035f13dd6184fd1802f6a000e44ea79r.jpg_960x960q75.jpg_.avif"
    },
    {
      id: "black",
      name: "שחור",
      englishName: "Black",
      hex: "#111111",
      imgUrl: "https://ae-pic-a1.aliexpress-media.com/kf/S1f424bffb5964020abf39f8cb657411aI.jpg_960x960q75.jpg_.avif"
    },
    {
      id: "army-green",
      name: "ירוק צבאי",
      englishName: "Army Green",
      hex: "#4b5320",
      imgUrl: "https://ae-pic-a1.aliexpress-media.com/kf/Sa55ef1a714714ebf9316d90f62d3f033X.jpg_960x960q75.jpg_.avif"
    },
    {
      id: "pink",
      name: "ורוד",
      englishName: "Pink",
      hex: "#ffb6c1",
      imgUrl: "https://ae-pic-a1.aliexpress-media.com/kf/Sa2fbd0203550474cb19343835293f8c8h.jpg_960x960q75.jpg_.avif"
    },
    {
      id: "white",
      name: "לבן",
      englishName: "White",
      hex: "#ffffff",
      imgUrl: "https://ae-pic-a1.aliexpress-media.com/kf/S50a60b311105453ebc58d8d2369c22211.jpg_960x960q75.jpg_.avif"
    },
    {
      id: "light-grey",
      name: "אפור בהיר",
      englishName: "Light Grey",
      hex: "#c0c0c0",
      imgUrl: "https://ae-pic-a1.aliexpress-media.com/kf/S5f4b8f3d351f4dafabc4a37dae0ba2d8N.jpg_960x960q75.jpg_.avif"
    }
  ] as ColorOption[],

  galleryImages: [
    {
      url: "https://ae-pic-a1.aliexpress-media.com/kf/S5d360c1ed5b247bba3ba49dd72dbcdcdt.jpg_960x960q75.jpg_.avif",
      title: "נעלי ברפוט - תמונה ראשית"
    },
    {
      url: "https://ae-pic-a1.aliexpress-media.com/kf/Sa3eaba0c1a7142d5ac2dc67be5c2b2b5C.jpg_960x960q75.jpg_.avif",
      title: "תצוגת מבט מהצד ורוד"
    },
    {
      url: "https://ae-pic-a1.aliexpress-media.com/kf/S903c546e6fe3456bbd62448d9dbe741aA.jpg_960x960q75.jpg_.avif",
      title: "תצוגת מבט מלמעלה אפור"
    },
    {
      url: "https://ae-pic-a1.aliexpress-media.com/kf/Seb9acc712f1242bc9109a0719e8fc7b23.jpg_960x960q75.jpg_.avif",
      title: "פרופיל אחורי ותפרים איכותיים"
    },
    {
      url: "https://ae-pic-a1.aliexpress-media.com/kf/Sa2fbd0203550474cb19343835293f8c8h.jpg_960x960q75.jpg_.avif",
      title: "גמישות סוליית הגומי"
    },
    {
      url: "https://ae-pic-a1.aliexpress-media.com/kf/S5f4b8f3d351f4dafabc4a37dae0ba2d8N.jpg_960x960q75.jpg_.avif",
      title: "אפור בהיר קלאסי ליום יום"
    }
  ],

  sizes: [
    { size: 36, euSize: "EU 36", footLengthCm: 23.0, note: "מתאים לרגל באורך 22.8 - 23.2 ס\"מ" },
    { size: 37, euSize: "EU 37", footLengthCm: 23.5, note: "מתאים לרגל באורך 23.3 - 23.7 ס\"מ" },
    { size: 38, euSize: "EU 38", footLengthCm: 24.0, note: "המלצה מביקורת: מושלם לרגל 24.0 ס\"מ בדיוק" },
    { size: 39, euSize: "EU 38.5", footLengthCm: 24.5, note: "נבדק: רגל 24.2 ס\"מ הזמינה 39 והתאים מצוין" },
    { size: 40, euSize: "EU 39", footLengthCm: 25.0, note: "מתאים לרגל באורך 24.8 - 25.2 ס\"מ" },
    { size: 41, euSize: "EU 40", footLengthCm: 25.5, note: "טיפ: רגל 25.4 ס\"מ הזמינה 41 והתאמתה מדויקת" },
    { size: 42, euSize: "EU 40.5", footLengthCm: 26.0, note: "מתאים לרגל באורך 25.8 - 26.2 ס\"מ" },
    { size: 43, euSize: "EU 41.5", footLengthCm: 26.5, note: "מתאים לרגל באורך 26.3 - 26.7 ס\"מ" },
    { size: 44, euSize: "EU 42", footLengthCm: 27.0, note: "מתאים לרגל באורך 26.8 - 27.2 ס\"מ" },
    { size: 45, euSize: "EU 43", footLengthCm: 27.5, note: "מתאים לרגל באורך 27.3 - 27.7 ס\"מ" },
    { size: 46, euSize: "EU 44", footLengthCm: 28.0, note: "מתאים לרגל באורך 27.8 - 28.2 ס\"מ" }
  ] as SizeRecommendation[],

  features: [
    {
      id: "barefoot-design",
      title: "עיצוב Barefoot רחב",
      description: "קופסת אצבעות רחבה המאפשרת לאצבעות הרגל חופש תנועה אמיתי, פריסה טבעית ומניעת לחץ מיותר, להליכה בריאה בדיוק כמו שהטבע תכנן.",
      iconName: "Maximize2"
    },
    {
      id: "breathable-lining",
      title: "בטנת קנבס נושמת ומאווררת",
      description: "בד קנבס איכותי המאפשר זרימת אוויר רציפה, שומר על הרגל יבשה, מונע ריחות לא נעימים ומבטיח תחושת רעננות מלטפת לאורך כל דקות היום.",
      iconName: "Wind"
    },
    {
      id: "durable-rubber",
      title: "סוליית גומי עמידה וגמישה במיוחד",
      description: "סוליה שטוחה (Zero Drop) וגמישה לחלוטין העשויה מגומי מובחר. מספקת הגנה אופטימלית יחד עם תחושת קרקע משופרת ועמידות לשנים קדימה.",
      iconName: "Activity"
    },
    {
      id: "true-to-size",
      title: "התאמה מלאה למידה הרגילה שלך",
      description: "הנעליים תפורות ומתוכננות בדיוק לפי סטנדרט המידות האירופאי. מומלץ לבחור במידה הרגילה שלך ללא צורך בהתלבטויות מורכבות.",
      iconName: "CheckCircle2"
    },
    {
      id: "versatile-colors",
      title: "6 גוונים מרהיבים ואופנתיים",
      description: "מגוון מוקפד של צבעים - אפור כהה, שחור, ירוק צבאי, ורוד פסטל, לבן נקי ואפור בהיר. מתאים לכל שילוב לבוש, קז'ואל, פנאי או ספורטיבי.",
      iconName: "Palette"
    },
    {
      id: "season-perfect",
      title: "מושלם לעונות המעבר",
      description: "הנעליים הקלות והגמישות הללו אידיאליות לאביב ולסתיו, מספקות הגנה קלה מהרוח תוך שמירה על משקל נוצה השומר על השרירים חזקים.",
      iconName: "CalendarDays"
    }
  ] as Feature[],

  specs: [
    { key: "סוג סגירה", value: "שרוכים נוחים ועמידים" },
    { key: "חומר גלם עליון", value: "גומי בד בשילוב קנבס נושם (Rubber & Heavy Canvas)" },
    { key: "חומר סוליית נעל", value: "גומי מובחר, אנטי-סליפ ומונע החלקה (Non-slip Rubber)" },
    { key: "חומר בטנה פנימית", value: "בד קנבס רך ומאורר (Comfort Breathable Fabric)" },
    { key: "סוג קדמת נעל (בוהן)", value: "מעוגלת ורחבה מאוד (Wide Round Toe Box)" },
    { key: "סגנון ועיצוב", value: "קז'ואל יומיומי / ספורט פנאי ואורבן" },
    { key: "מגדר מתאים", value: "נשים (יוניסקס - מתאים לחלוטין גם לגברים)" },
    { key: "טווח מידות זמין", value: "36 עד 46 (EU)" },
    { key: "מתאים לעונות", value: "אביב / קיץ / סתיו לעונות המעבר" },
    { key: "עמידות מלאה למים", value: "אינו עמיד למים לחלוטין (נשימה גבוהה)" },
    { key: "כיסוי מגן מתכת בבוהן", value: "ללא (רך, קל וטבעי לחלוטין)" }
  ] as Spec[],

  reviews: [
    {
      id: "rev-1",
      author: "שירן ל. (קונה מאומתת)",
      rating: 5,
      date: "לפני יומיים",
      color: "ורוד",
      size: 41,
      text: "הסניקרס עלתה על כל הציפיות שלי! היא נוחה בטירוף, רחבה מאוד באצבעות ככה שאין לחץ כמו בנעליים רגילות. התפירה איכותית ונקייה. יש לי רגל של 25.5 ס\"מ ומידה 41 יושבת פשוט בהתאמה מושלמת. ממליצה בחום אדיר!",
      tags: ["איכות גבוהה", "נוח בטירוף", "עיצוב מקסים"],
      isVerified: true,
      avatarSeed: "shiran"
    },
    {
      id: "rev-2",
      author: "אביב ג. (קונה מאומת)",
      rating: 5,
      date: "לפני שבוע",
      color: "אפור כהה",
      size: 43,
      text: "נעליים פשוט מצוינות. הזמנתי אפור כהה וזה נראה ספורטיבי ויפה. הסוליה גמישה בטירוף ואפשר לקפל אותה לגמרי ביד אחת. זה שינה לי את הנוחות בהליכות היומיות. הכל הגיע ארוז ומסודר ומשלוח מהיר מאוד.",
      tags: ["גמישות מדהימה", "צבע יפה", "משלוח מהיר"],
      isVerified: true,
      avatarSeed: "aviv"
    },
    {
      id: "rev-3",
      author: "אלנה ק. (קונה מאומתת)",
      rating: 5,
      date: "לפני שבועיים",
      color: "לבן",
      size: 39,
      text: "מדדתי את הרגל לפני ההזמנה, יצא לי 24.2 ס\"מ והזמנתי מידה 39 לפי ההמלצות כאן. מתאים בול! הן קלות כמו נוצה ומרגישים את האדמה בצורה כל כך טבעית ובריאה. הגוון הלבן נקי ויפה, קל לנקות.",
      tags: ["משקל נוצה", "מידה מדויקת", "קל לניקוי"],
      isVerified: true,
      avatarSeed: "elena"
    },
    {
      id: "rev-4",
      author: "מיכל ש. (קונה מאומתת)",
      rating: 4,
      date: "לפני חודש",
      color: "אפור בהיר",
      size: 38,
      text: "הזמנתי מידה 38 לרגל של 24.0 ס\"מ ויצא מעולה. הנעל רחבה ומשחררת את הבוהן מהתכווצויות. נתתי 4 כוכבים רק כי רציתי שהסוליה תהיה טיפה יותר עבה, אבל אז הבנתי שככה זה נעלי יחפנים (barefoot) וזה דורש כמה ימים להסתגל. עכשיו אני לא מורידה אותן!",
      tags: ["שחרור אצבעות", "מומלץ"],
      isVerified: true,
      avatarSeed: "michal"
    }
  ] as Review[]
};

export const RECENT_PURCHASES_MOCKS = [
  { name: "ליאור מרמת גן", color: "שחור", size: 42, time: "לפני 2 דקות" },
  { name: "קרין מחיפה", color: "ורוד", size: 38, time: "לפני 5 דקות" },
  { name: "יניב מירושלים", color: "אפור כהה", size: 45, time: "לפני 8 דקות" },
  { name: "הילה מתל אביב", color: "לבן", size: 37, time: "לפני 13 דקות" },
  { name: "תומר מבאר שבע", color: "ירוק צבאי", size: 44, time: "לפני 17 דקות" }
];
