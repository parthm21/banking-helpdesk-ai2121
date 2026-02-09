// =====================================
// FULL KNOWLEDGE BASE (EN + HI)
// =====================================

const qaData = [

/* ================= GREETINGS ================= */
{
  keywords: ["hello", "hi", "hey"],
  lang: "en",
  answer: "Hello 👋 How can I help you today?"
},
{
  keywords: ["good morning"],
  lang: "en",
  answer: "Good morning ☀️ Hope you have a great day!"
},
{
  keywords: ["good evening"],
  lang: "en",
  answer: "Good evening 🌆 How may I assist you?"
},
{
  keywords: ["नमस्ते", "namaste"],
  lang: "hi",
  answer: "नमस्ते 🙏 मैं आपकी कैसे मदद कर सकता हूँ?"
},
{
  keywords: ["कैसे हो"],
  lang: "hi",
  answer: "मैं ठीक हूँ 😊 पूछने के लिए धन्यवाद!"
},

/* ================= GENERAL ================= */
{
  keywords: ["help"],
  lang: "en",
  answer: "Sure 🙂 Please tell me your problem in simple words."
},
{
  keywords: ["मदद"],
  lang: "hi",
  answer: "ज़रूर 🙂 कृपया अपनी समस्या सरल शब्दों में बताइए।"
},
{
  keywords: ["who are you"],
  lang: "en",
  answer: "I am a personal AI assistant designed to help users with daily questions."
},
{
  keywords: ["तुम कौन हो"],
  lang: "hi",
  answer: "मैं एक पर्सनल AI असिस्टेंट हूँ जो आपकी मदद के लिए बनाया गया है।"
},

/* ================= BANKING ================= */
{
  keywords: ["bank"],
  lang: "en",
  answer: "I can help with banking issues like balance enquiry, ATM problems, and card issues."
},
{
  keywords: ["बैंक"],
  lang: "hi",
  answer: "मैं बैंक से जुड़ी समस्याओं जैसे बैलेंस, एटीएम और कार्ड की समस्या में मदद कर सकता हूँ।"
},
{
  keywords: ["balance", "account balance"],
  lang: "en",
  answer: "You can check your account balance using ATM, mobile banking, or internet banking."
},
{
  keywords: ["बैलेंस", "खाता बैलेंस"],
  lang: "hi",
  answer: "आप एटीएम, मोबाइल बैंकिंग या इंटरनेट बैंकिंग से बैलेंस चेक कर सकते हैं।"
},
{
  keywords: ["atm"],
  lang: "en",
  answer: "ATM issues may include cash not received, card blocked, or machine out of service."
},
{
  keywords: ["एटीएम"],
  lang: "hi",
  answer: "एटीएम से जुड़ी समस्याओं में कैश न निकलना, कार्ड ब्लॉक होना शामिल है।"
},
{
  keywords: ["cash not received"],
  lang: "en",
  answer: "If cash was not received but amount deducted, contact your bank within 24 hours."
},
{
  keywords: ["कैश नहीं मिला"],
  lang: "hi",
  answer: "अगर कैश नहीं मिला लेकिन पैसे कट गए हैं तो 24 घंटे में बैंक से संपर्क करें।"
},
{
  keywords: ["debit card", "card blocked"],
  lang: "en",
  answer: "If your debit card is blocked, you can unblock it using your bank app or customer care."
},
{
  keywords: ["डेबिट कार्ड", "कार्ड ब्लॉक"],
  lang: "hi",
  answer: "अगर आपका डेबिट कार्ड ब्लॉक हो गया है तो बैंक ऐप या कस्टमर केयर से अनब्लॉक करें।"
},
{
  keywords: ["upi"],
  lang: "en",
  answer: "UPI issues can be fixed by checking internet connection or bank server status."
},
{
  keywords: ["यूपीआई"],
  lang: "hi",
  answer: "यूपीआई समस्या इंटरनेट या बैंक सर्वर की वजह से हो सकती है।"
},
{
  keywords: ["transaction failed"],
  lang: "en",
  answer: "Failed transactions usually reverse within 2–5 working days."
},
{
  keywords: ["लेनदेन फेल"],
  lang: "hi",
  answer: "फेल हुआ लेनदेन आमतौर पर 2–5 कार्यदिवस में वापस हो जाता है।"
},

/* ================= DAILY LIFE ================= */
{
  keywords: ["time"],
  lang: "en",
  answer: `Current time is ${new Date().toLocaleTimeString()}`
},
{
  keywords: ["समय"],
  lang: "hi",
  answer: `वर्तमान समय है ${new Date().toLocaleTimeString()}`
},
{
  keywords: ["date"],
  lang: "en",
  answer: `Today's date is ${new Date().toLocaleDateString()}`
},
{
  keywords: ["तारीख"],
  lang: "hi",
  answer: `आज की तारीख है ${new Date().toLocaleDateString()}`
},
{
  keywords: ["alarm"],
  lang: "en",
  answer: "You can set an alarm using your mobile phone clock app."
},
{
  keywords: ["अलार्म"],
  lang: "hi",
  answer: "आप मोबाइल के घड़ी ऐप से अलार्म सेट कर सकते हैं।"
},

/* ================= TECHNOLOGY ================= */
{
  keywords: ["internet not working"],
  lang: "en",
  answer: "Please restart your router or contact your internet provider."
},
{
  keywords: ["इंटरनेट नहीं चल रहा"],
  lang: "hi",
  answer: "कृपया राउटर रीस्टार्ट करें या इंटरनेट प्रदाता से संपर्क करें।"
},
{
  keywords: ["phone slow"],
  lang: "en",
  answer: "Clear storage, close background apps, and restart your phone."
},
{
  keywords: ["फोन स्लो"],
  lang: "hi",
  answer: "स्टोरेज साफ करें और फोन को रीस्टार्ट करें।"
},

/* ================= HEALTH ================= */
{
  keywords: ["fever"],
  lang: "en",
  answer: "Drink fluids and rest. If fever continues, consult a doctor."
},
{
  keywords: ["बुखार"],
  lang: "hi",
  answer: "पानी पिएँ और आराम करें। बुखार बना रहे तो डॉक्टर से मिलें।"
},

/* ================= EMERGENCY ================= */
{
  keywords: ["emergency"],
  lang: "en",
  answer: "In case of emergency, contact local emergency services immediately."
},
{
  keywords: ["आपातकाल"],
  lang: "hi",
  answer: "आपातकाल की स्थिति में तुरंत स्थानीय सेवाओं से संपर्क करें।"
},
{
  keywords: ["ambulance"],
  lang: "en",
  answer: "Call ambulance services or emergency helpline immediately."
},
{
  keywords: ["एम्बुलेंस"],
  lang: "hi",
  answer: "तुरंत एम्बुलेंस या आपातकालीन हेल्पलाइन पर कॉल करें।"
},

/* ================= DEFAULT ================= */
{
  keywords: ["default"],
  lang: "en",
  answer: "I'm still learning 😊 Could you please explain your question a bit more?"
},
{
  keywords: ["default"],
  lang: "hi",
  answer: "मैं अभी सीख रहा हूँ 😊 कृपया अपना सवाल थोड़ा और स्पष्ट करें।"
}

];

module.exports = qaData;
