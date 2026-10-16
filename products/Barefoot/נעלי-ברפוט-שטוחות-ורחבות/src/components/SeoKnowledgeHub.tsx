import React, { useState } from "react";
import { 
  FileText, 
  MapPin, 
  Search, 
  Compass, 
  Activity, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft,
  ChevronDown
} from "lucide-react";

export function SeoKnowledgeHub() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleScrollToProduct = () => {
    const element = document.getElementById("product-customizer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      q: "מדוע נעלי יחפנים בריאות יותר לגוף מנעליים מרופדות?",
      a: "ריפוד יתר בנעליים רגילות מונע מכפות הרגליים 'לקרוא' את המשטח ומחליש את השרירים והגידים הטבעיים של הרגל, מה שמעביר את הזעזוע ישירות לברכיים, לאגן ולגב התחתון. נעלי יחפנים מחזקות את כף הרגל כך שהיא בולמת את הזעזוע בעצמה, באופן שהטבע תכנן אותה לעשות מראש."
    },
    {
      q: "האם נעלי יחפנים מתאימות לעמידה ממושכת בעבודה?",
      a: "כן, מוחלט! בעמידה ממושכת, תבנית פריסת הבהונות הרחבה מונעת עצירת לחץ דם, מונעת כאבי נפיחות ומאזנת את העומס באופן שווה על פני שתי כפות הרגליים במקום לרכז אותו רק בעקב הרגל הפגוע."
    },
    {
      q: "מה ההבדל בין נעלי יחפנים (Barefoot Shoes) לנעליים רכות רגילות?",
      a: "נעליים רכות רגילות לרוב עדיין כוללות קצה צר (לוחץ אצבעות) והגבהת עקב סמויה (דרופ). נעלי יחפנים אמיתיות כוללות 3 עקרונות ברזל: קופסת אצבעות רחבה במיוחד, סוליה דקה ושטוחה (אפס דרופ), וגמישות מרבית המאפשרת לקפל את הנעל לכל כיוון."
    }
  ];

  return (
    <section 
      id="expert-seo-hub" 
      className="mt-16 bg-gradient-to-b from-[#0b241a]/40 to-[#05110a]/80 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-[#1a4b35] shadow-2xl relative overflow-hidden text-right leading-relaxed"
      dir="rtl"
    >
      {/* Absolute decorative backgrounds */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#bca374]/3 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative tag for premium feel */}
      <div className="flex items-center gap-2 text-[#bca374] font-semibold text-xs md:text-sm mb-4 tracking-widest uppercase">
        <Compass className="w-4 h-4 animate-spin-slow text-[#bca374]" />
        <span>מרכז המידע והבריאות הבארפוטי הרשמי של ישראל</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4 font-sans tracking-tight">
        המדריך המלא לנעלי יחפנים (Barefoot) בישראל 2026: למה כף הרגל שלך מתחננת שתפסיקי לנעול נעליים רגילות?
      </h2>
      
      <p className="text-sm md:text-base text-slate-300 max-w-4xl mb-8 font-medium">
        מזג האוויר המקומי המהביל, ההליכות הרצופות ברחובות המשובשים והרצון לשמור על בריאות ויציבת גוף אידיאלית - כולם הובילו לביקוש אדיר עבור נעלי בארפוט מומלצות בישראל. בכתבה הבאה נרד לעומק הפיזיולוגיה של כף הרגל, נבין את השפעת נעלי ה-Barefoot על בריאות השלד, ונעורר מחדש את החיבור הטבעי שלכם לאדמה.
      </p>

      {/* THREE-COLUMN HIGHLIGHT BENEFITS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <div className="bg-[#05110b] border border-[#1a4b35]/60 rounded-2xl p-5 hover:border-[#bca374]/40 transition-all group">
          <div className="w-10 h-10 bg-[#bca374]/10 rounded-xl flex items-center justify-center text-[#bca374] mb-3 group-hover:scale-110 transition-transform">
            <Activity className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-100 mb-1.5 font-sans">שיקום המבנה האנטומי</h3>
          <p className="text-xs text-slate-400 font-medium">
            פריסה בריאה ופתוחה של הבהונות שמחזירה את היציבות הטבעית, מפרידה אצבעות ומונעת התפתחות עיוותי בהונות כואבים.
          </p>
        </div>

        <div className="bg-[#05110b] border border-[#1a4b35]/60 rounded-2xl p-5 hover:border-[#bca374]/40 transition-all group">
          <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-100 mb-1.5 font-sans">הקלה על כאבים בשלד</h3>
          <p className="text-xs text-slate-400 font-medium">
            סוליית Zero-Drop מאוזנת המיישרת את עמוד השדרה ומפחיתה עומסי זעזועים מציקים ממפרקי הקרסול, הברכיים והגב התחתון.
          </p>
        </div>

        <div className="bg-[#05110b] border border-[#1a4b35]/60 rounded-2xl p-5 hover:border-[#bca374]/40 transition-all group">
          <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-100 mb-1.5 font-sans">קנבס נושם המתאים בול לארץ</h3>
          <p className="text-xs text-slate-400 font-medium">
            בד מעולה, מיוצר במיוחד לאוורור מקסימלי, שומר על תחושת קרירות ורעננות מיטבית בימי הקיץ והסתיו הישראלי המאתגרים.
          </p>
        </div>
      </div>

      {/* CONTINUOUS EDITORIAL CONTENT - INSTEAD OF COMPLEX TAB LAYOUTS */}
      <div className="space-y-8 mb-10">
        
        {/* ARTICLE BLOCK 1 */}
        <div className="bg-[#05110b]/60 border border-[#1b4332] rounded-3xl p-6 md:p-8 space-y-4 hover:border-[#bca374]/20 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#bca374]/10 text-[#bca374] flex items-center justify-center font-black text-sm">1</div>
            <h3 className="text-lg md:text-2xl font-black text-[#bca374] font-sans">
              האמת המדעית המושתקת: למה הנעליים המודרניות מחלישות את הגוף שלנו בקביעות?
            </h3>
          </div>
          <p className="text-sm text-slate-350 leading-relaxed font-medium">
            האם ידעת שרגל ממוצעת מורכבת מ-26 עצמות, 33 מפרקים ומעל ל-100 שרירים וגידים המחוברים באופן הדוק? כשאנו כולאים את כף הרגל בנעליים צרות ונוקשות יום אחר יום, אנו למעשה 'מבצעים קיבוע' לאחד האיברים הפעילים והמורכבים ביותר בגופנו. נעליים מודרניות כופות צורה מחודדת ובלתי טבעית על הבהונות, נועלות את קשת כף הרגל באורח פסיבי ומחלישות את השרירים לחלוטין.
            <br /><br />
            בדומה לשיבוש יציבה שיוצר גבס ממושך, נעילת נעליים בעלות עקב מוגבה (אפילו עקב ריצה רגיל של 10-12 מ"מ) מקצרת את גיד האכילס ומטה את האגן קדימה. כתוצאה מכך, מרכז הכובד משתנה והעומס מועבר ישירות למפרקי הברכיים, הירכיים והגב התחתון. שימוש בנעלי יחפנים (Barefoot Shoes) רחבות מאפשר שחרור מלא של העצמות ומחזיר את הגוף לאיזון אנטומי מושלם שתורם להפחתת עייפות כרונית בכל צעד.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>חופש פריסה מלא (Wide Toe Box):</strong> מאפשר לבוהן הגדולה לחזור ליישור האנטומי הטבעי שלה.</p>
            </div>
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>איזון מושלם (Zero-Drop 0mm):</strong> מוגש ללא הגבהת עקב בכלל כדי ליישר את השלד.</p>
            </div>
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>חיזוק שרירי הליבה:</strong> מעורר שרירים רדומים להתחיל לעבוד מחדש ולמנוע קריסה.</p>
            </div>
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>זרימת דם מוגברת:</strong> מניעה של נפיחות וכאבי רגל באקלים הישראלי.</p>
            </div>
          </div>
        </div>

        {/* ARTICLE BLOCK 2 */}
        <div className="bg-[#05110b]/60 border border-[#1b4332] rounded-3xl p-6 md:p-8 space-y-4 hover:border-[#bca374]/20 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-black text-sm">2</div>
            <h3 className="text-lg md:text-2xl font-black text-[#bca374] font-sans">
              אורתופדים ופיזיותרפיסטים חושפים: פריצת הדרך המוכחת לדורבן כף הרגל והאלוקס ולגוס
            </h3>
          </div>
          <p className="text-sm text-slate-350 leading-relaxed font-medium">
            בשנים האחרונות חל שינוי דרמטי בקרב קהילת הספורט, האורתופדיה והפיזיותרפיה בישראל. יותר ויותר רופאי ספורט, מטפלים תנועתיים חלוציים ופיזיותרפיסטים מעוררים מודעות מחקרית מבוססת וממליצים באופן מפורש על מעבר לנעלי יחפנים כפתרון מניעתי ושיקומי מבוסס תנועה.
            <br /><br />
            הבעיה העיקרית עם נעליים ספורטיביות תומכות מדי היא שהן מרגילות את כף הרגל לעצלנות מבנית. הקשת של כף הרגל היא גשר הנדסי מרהיב ביופיו - ככל שלוחצים עליו מלמטה (באמצעות מדרס נוקשה), הוא הולך ומאבד מחוסנו. רק כאשר הקשת מורשית לקפוץ באופן חופשי וגמיש בכל דריכה, היא מתחזקת ומסוגלת לספוג זעזועים המגיעים מהקרקע. נעלי בארפוט משמשות כחלופה נוחה, המדמה הליכה יחפה בריאה על חול ים פריך או אדמה רכה.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>שיקום אקטיבי בכל צעד:</strong> אימון טבעי יומיומי המחלק את עומסי המדרך בצורה שווה.</p>
            </div>
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>הקלה על דלקות עקב ודורבן:</strong> מוריד את המתיחה הדלקתית ברצועת ה-Plantar Fascia.</p>
            </div>
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>מניעת עיוות בהונות (אלוקס ולגוס):</strong> מתן מרחב התרחבות בריא ורחב בצידי הנעל.</p>
            </div>
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>תאום עצבי מעורר (Proprioception):</strong> האזנה טבעית של קצוות העצב למניעת מעידות.</p>
            </div>
          </div>
        </div>

        {/* ARTICLE BLOCK 3 */}
        <div className="bg-[#05110b]/60 border border-[#1b4332] rounded-3xl p-6 md:p-8 space-y-4 hover:border-[#bca374]/20 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-black text-sm">3</div>
            <h3 className="text-lg md:text-2xl font-black text-[#bca374] font-sans">
              כך תרגילו את כף הרגל ב-3 שלבים קלים: המדריך למעבר נבון ובטוח לנעלי יחפנים
            </h3>
          </div>
          <p className="text-sm text-slate-350 leading-relaxed font-medium">
            עבור רובנו, כפות הרגליים בילו עשרות שנים בתוך 'שריון' אורתופדי מרופד, נעולות ומוצרות בנעליים צפופות. לכן, שרירי הרגל וגיד האכילס התקצרו ונחלשו, והם זקוקים למפרק זמן קצר של הסתגלות גופנית בלעדית.
            <br /><br />
            אל תמהרו לרוץ מרחקים ארוכים ביום הראשון! מומלץ מאוד לגשת לתהליך בצורה מדורגת ותומכת, תוך מתן הזדמנות לשרירים העמוקים בכף הרגל להיבנות מחדש באופן בריא ואורגני. הקפידו להקשיב לסימני הגוף שלכם, ותגלו מהר מאוד שכל צעד הופך לקליל, משוחרר ומהנה הרבה יותר.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>שבוע ראשון (הסתגלות קלה):</strong> נעילת נעלי היחפנים למשך שעתיים-שלוש ביום בעיקר בבית ובמשרד.</p>
            </div>
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>שבוע שני (העלאת נפח):</strong> הגברת משך הנעילה לחצי יום של פעילות וסידורים רגילים.</p>
            </div>
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>שבוע שלישי ואילך (שחרור):</strong> מעבר מלא לפעילות יומיומית מוגברת, ריצה טבעית, טיולים ופנאי.</p>
            </div>
            <div className="flex gap-2 text-xs md:text-sm text-slate-200">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <p className="font-medium"><strong>בונוס מומלץ:</strong> גלגול כדור טניס או מערוך קטן מתחת לקשת כף הרגל למשך 2 דקות בערב.</p>
            </div>
          </div>
        </div>

      </div>

      {/* EXTENSIVE LONG FORM ARTICLE CONTENT BLOG FORMAT (Perfect for SEO keywords and deep user value) */}
      <div className="bg-[#05110b]/45 border border-[#1b4332]/45 rounded-3xl p-6 md:p-8 mb-10 space-y-8">
        <h3 className="text-xl md:text-2xl font-black text-white font-sans border-b border-[#1b4332] pb-3">
          שלוש בעיות האורתופדיה הנפוצות ביותר בישראל — ואיך נעלי בארפוט פותרות אותן מהשורש
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="space-y-3 bg-[#020704] p-5 rounded-2xl border border-[#1b4332]/30">
            <h4 className="font-extrabold text-[#bca374] text-base font-sans flex items-center gap-2">
              <span className="text-sm bg-[#bca374]/15 px-2 py-0.5 rounded text-[#bca374]">01</span>
              דורבן כף הרגל (Plantar Fasciitis)
            </h4>
            <p className="text-xs text-slate-350 leading-relaxed font-medium">
              הכאב החד בעקב בצעדים הראשונים של הבוקר הוא לרוב דלקת ברקמה החיבורית העוטפת את שרירי כף הרגל. הסיבה המרכזית היא חולשה של שרירי הקשת הנוצרים מחבישת נעלי עבודה קשיחות שלא מאפשרות גמישות.
            </p>
            <p className="text-[11px] text-[#bca374] font-bold">
              המענה של יחפנים: מדרך Zero Drop מחזיר את המאמץ לחלקי כף הרגל הנכונים ומאפשר לרקמה להשתקם ולנוע ללא מתיחה מעוותת.
            </p>
          </div>

          <div className="space-y-3 bg-[#020704] p-5 rounded-2xl border border-[#1b4332]/30">
            <h4 className="font-extrabold text-[#bca374] text-base font-sans flex items-center gap-2">
              <span className="text-sm bg-[#bca374]/15 px-2 py-0.5 rounded text-[#bca374]">02</span>
              בוהן קלובה / האלוקס ולגוס
            </h4>
            <p className="text-xs text-slate-350 leading-relaxed font-medium">
              עיוות מבני של הבוהן הגדולה, הנגרם באופן ישיר מלחץ מתמיד של קופסאות אצבעות צרות בנעלי אופנה, נעלי ריצה חנוקות או נעלי עקב. הבוהן נדחפת פנימה בעוד המפרק בולט החוצה ומפתח מצב דלקתי כואב במיוחד.
            </p>
            <p className="text-[11px] text-[#bca374] font-bold">
              המענה של יחפנים: קופסת בהונות רחבה ומשוחררת (Wide Toe Box) המעניקה מקום פריסה טבעי לחופש אצבעות מלא בכל פסיעה באקלים חם.
            </p>
          </div>

          <div className="space-y-3 bg-[#020704] p-5 rounded-2xl border border-[#1b4332]/30">
            <h4 className="font-extrabold text-[#bca374] text-base font-sans flex items-center gap-2">
              <span className="text-sm bg-[#bca374]/15 px-2 py-0.5 rounded text-[#bca374]">03</span>
              כאבי גב תחתון וברכיים כרוניים
            </h4>
            <p className="text-xs text-slate-350 leading-relaxed font-medium">
              כאשר אנו נועלים נעליים עם הגבהת עקב (Drop), האגן נאלץ לנטות לפנים כדי לפצות על השיפוע. הדבר מעוות את הקימור של הגב התחתון ויוצר לחץ עצום על הדיסקים הבין-חולייתיים ועל מפרקי הברך השחוקים.
            </p>
            <p className="text-[11px] text-[#bca374] font-bold">
              המענה של יחפנים: איזון שווה לחלוטין ויציבה מינימלית מאפשרת לאגן לחזור לזווית טבעית, מה שמעלים מיד עומסים מיותרים מהברכיים והגב.
            </p>
          </div>

        </div>

        <div className="bg-[#0b241a]/20 border border-emerald-500/20 p-5 rounded-2xl space-y-3">
          <h4 className="text-sm md:text-base font-extrabold text-slate-100 font-sans">
            מדוע נעלי בארפוט מומלצות במיוחד לאקלים הישראלי החם ורחובות גוש דן?
          </h4>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
            הליכה ברחוב הישראלי הטיפוסי מפגישה את כפות הרגליים שלנו עם משטחים קשים, אספלט לוהט ומדרכות משובשות. נעלי ה-Wide Barefoot Flats עוצבו מבד קנבס מאוורר ונושם במיוחד שמונע הצטברות חום ולחות, בעוד הסוליה הגמישה והדקה (אך שומרת ומגינה מחפצים חדים, זכוכיות או אבנים חמות) מאפשרת לרגל שלכם ליהנות מחופש של יחפנות מוחלטת לצד בטיחות אופטימלית ללא פשרות. בנוסף, העיצוב האלגנטי והקליל מתאים בצורה נפלאה לאאוטפיטים של קיץ, סתיו או אביב – למשרד, לקפה או לטיול ארוך בשדירות רוטשילד או בטיילת הים.
          </p>
        </div>
      </div>

      {/* SEO FAQ ACCORDION */}
      <div className="space-y-4 mb-10">
        <h3 className="text-lg md:text-2xl font-black text-slate-100 font-sans border-b border-[#1a4b35] pb-2 flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#bca374]" />
          <span>שאלות ותשובות נפוצות על נעלי יחפנים ובריאות כף הרגל</span>
        </h3>

        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isExpanded = expandedFaq === index;
            return (
              <div 
                key={index} 
                className="border border-[#1a4b35] bg-[#05110a]/50 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-right select-none outline-hidden cursor-pointer hover:bg-[#0b241a]/20"
                >
                  <span className="font-bold text-xs md:text-sm text-slate-100 flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1b4332] text-[#bca374] text-[10px] font-black flex items-center justify-center shrink-0">?</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#bca374]" : ""}`} />
                </button>
                
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 text-xs md:text-sm text-slate-400 leading-relaxed font-medium animate-fade-in border-t border-[#1a4b35]/20 bg-[#040e09]/40 pr-12">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CALL TO ACTION DYNAMIC BLOCK (High converting widget linking back to product) */}
      <div className="bg-gradient-to-r from-[#bca374]/15 via-[#bca374]/5 to-[#bca374]/15 border border-[#bca374]/30 rounded-3xl p-6 text-center space-y-4">
        <div className="flex justify-center">
          <span className="bg-[#bca374] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            מבצע השקה בלעדי לזמן מוגבל בישראל
          </span>
        </div>
        
        <h3 className="text-lg md:text-2xl font-extrabold text-[#bca374] font-sans">
          שתחררו את הרגליים שלכם עוד היום ותהנו מנוחות טבעית שמעולם לא הכרתם!
        </h3>
        
        <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium">
          אל תשארו מאחור במהפכת היציבה והנוחות. הזמינו כעת את נעלי ה-Wide Barefoot Flats עם משלוח חינם מבוטח ישירות אליכם הביתה.
        </p>

        {/* Action column with disclaimer ALWAYS placed below */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <button
            onClick={handleScrollToProduct}
            className="w-full sm:w-auto bg-gradient-to-r from-[#bca374] to-[#a38b5d] hover:from-[#ad9466] hover:to-[#91794d] active:scale-95 text-slate-950 font-black text-sm px-8 py-3.5 rounded-2xl shadow-xl hover:shadow-[#bca374]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-slate-950 shrink-0 animate-pulse" />
            <span>הזמינו כעת במחיר המבצע - לבחירת צבע ומידה</span>
          </button>
          
          <span className="text-xs text-slate-400 font-bold block mt-1 text-center">
            * המבצע והמשלוח החינמי המבוטח כוללים מעקב משלוחים מלא ישירות לביתכם
          </span>
        </div>
      </div>

    </section>
  );
}
