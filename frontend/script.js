// ===== GLOBAL STATE (IMPORTANT) =====
let voiceReplyEnabled = true;

document.addEventListener("DOMContentLoaded", () => {

  const micBtn = document.getElementById("micBtn");
  const sendBtn = document.getElementById("sendBtn");
  const input = document.getElementById("userInput");
  const output = document.getElementById("chat-output");
  const langSelect = document.getElementById("langSelect");

  const voiceToggleBtn = document.getElementById("voiceToggle");
  const voiceIcon = document.getElementById("voiceIcon");

  // ===== VOICE TOGGLE BUTTON =====
  if (voiceToggleBtn && voiceIcon) {
    voiceIcon.textContent = "🔊";

    voiceToggleBtn.addEventListener("click", () => {
      voiceReplyEnabled = !voiceReplyEnabled;

      voiceIcon.textContent = voiceReplyEnabled ? "🔊" : "🔇";

      // stop speaking when OFF
      window.speechSynthesis.cancel();
    });
  }

  // ===== SEND MESSAGE =====
  async function sendMessage(textFromVoice = null) {
    const message = textFromVoice || input.value.trim();
    if (!message) return;

    const lang = langSelect ? langSelect.value : "en";

    sendBtn.classList.add("send-active");
    setTimeout(() => sendBtn.classList.remove("send-active"), 300);

    output.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    input.value = "";
    output.scrollTop = output.scrollHeight;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, lang })
      });

      const data = await res.json();

      output.innerHTML += `
        <p>
          <strong>AI:</strong> ${data.reply}
          <span class="ai-tag">— AI</span>
        </p>
      `;

      output.scrollTop = output.scrollHeight;

      // 🔊 SPEAK AI RESPONSE
      speakText(data.reply);

    } catch {
      output.innerHTML += `
        <p><strong>AI:</strong> Server error <span class="ai-tag">— AI</span></p>
      `;
    }
  }

  window.sendMessage = sendMessage;

  // ===== ENTER KEY SEND =====
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  // ===== VOICE INPUT (MIC) =====
  window.startVoice = function () {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice recognition not supported");
      return;
    }

    const recognition = new webkitSpeechRecognition();

    recognition.lang =
      langSelect && langSelect.value === "hi" ? "hi-IN" : "en-US";

    micBtn.classList.add("mic-active");

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      micBtn.classList.remove("mic-active");
      sendMessage(voiceText);
    };

    recognition.onerror = recognition.onend = () => {
      micBtn.classList.remove("mic-active");
    };

    recognition.start();
  };

});

// ===== VOICE OUTPUT FUNCTION (ONLY ONE) =====
function speakText(text) {
  if (!voiceReplyEnabled) return;
  if (!text) return;

  const utterance = new SpeechSynthesisUtterance(text);

  const langSelect = document.getElementById("langSelect");
  utterance.lang =
    langSelect && langSelect.value === "hi" ? "hi-IN" : "en-US";

  utterance.rate = 1;
  utterance.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}
