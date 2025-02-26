// Auto-Typing Hero Text Effect
let i = 0;
const text = "Welcome to AKN Edits";
function typeEffect() {
    if (i < text.length) {
        document.getElementById("hero-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// AI Chatbot
document.getElementById("chat-btn").addEventListener("click", function () {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "block" ? "none" : "block";
});
