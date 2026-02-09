document.addEventListener("DOMContentLoaded", () => {

  const micBtn = document.getElementById("micBtn");
  const sendBtn = document.getElementById("sendBtn");
  const input = document.getElementById("userInput");
  const output = document.getElementById("chat-output");
  const langSelect = document.getElementById("langSelect");

  // ===== SEND MESSAGE =====
  async function sendMessage(textFromVoice = null) {
    const message = textFromVoice || input.value.trim();
    if (!message) return;

    const lang = langSelect ? langSelect.value : "en";

    // send button feedback
    sendBtn.classList.add("send-active");
    setTimeout(() => sendBtn.classList.remove("send-active"), 300);

    output.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    input.value = "";
    output.scrollTop = output.scrollHeight;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, lang }) // 🔥 lang sent to backend
      });

      const data = await res.json();

      output.innerHTML += `
        <p>
          <strong>AI:</strong> ${data.reply}
          <span class="ai-tag">— AI</span>
        </p>
      `;

      output.scrollTop = output.scrollHeight;

      // 🔊 VOICE REPLY
      speakText(data.reply);

    } catch {
      output.innerHTML += `
        <p><strong>AI:</strong> Server error <span class="ai-tag">— AI</span></p>
      `;
    }
  }

  // expose to HTML
  window.sendMessage = sendMessage;

  // ===== ENTER KEY SEND =====
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  // ===== VOICE INPUT =====
  window.startVoice = function () {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice recognition not supported");
      return;
    }

    const recognition = new webkitSpeechRecognition();

    // 🎤 mic language = selected language
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

// ===== VOICE OUTPUT =====
function speakText(text) {
  const voiceToggle = document.getElementById("voiceToggle");
  if (!voiceToggle || !voiceToggle.checked) return;

  const utterance = new SpeechSynthesisUtterance(text);

  // 🔊 voice language auto (based on selected language OR text)
  const langSelect = document.getElementById("langSelect");
  if (langSelect && langSelect.value === "hi") {
    utterance.lang = "hi-IN";
  } else {
    utterance.lang = "en-US";
  }

  utterance.rate = 1;
  utterance.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}
