const express = require("express");
const cors = require("cors");
const path = require("path");
const qaData = require("./qaData");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// Hindi detect
function isHindi(text) {
  return /[\u0900-\u097F]/.test(text);
}

app.post("/api/chat", (req, res) => {
  const rawMessage = req.body.message || "";
  let message = rawMessage.toLowerCase().trim();

  // spelling normalization
  message = message
    .replace("hellow", "hello")
    .replace("helo", "hello")
    .replace("hlo", "hello");

  // language detect
  let userLang = isHindi(message) ? "hi" : "en";
  if (message.includes("hindi")) userLang = "hi";
  if (message.includes("english")) userLang = "en";

  // 🔥 MAIN FIX: return as soon as match found
  for (let item of qaData) {
    if (item.lang && item.lang !== userLang) continue;

    for (let key of item.keywords) {
      if (message.includes(key)) {
        return res.json({ reply: item.answer });
      }
    }
  }

  // default reply (only if NO match found)
  const defaultReply =
    userLang === "hi"
      ? "मैं आपकी बात समझ नहीं पाया, कृपया दोबारा लिखें।"
      : "I didn't understand that. Please try again.";

  res.json({ reply: defaultReply });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:5000`);
});
