document.addEventListener("DOMContentLoaded", function() {
    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Your message has been sent!");
    });

    // AI Chatbot Toggle
    document.getElementById("chatbot-toggle").addEventListener("click", function() {
        document.getElementById("chatbot-box").classList.toggle("active");
    });

    // Auto Typing Effect
    const text = "Welcome to AKN Edits";
    let index = 0;

    function typeEffect() {
        document.querySelector(".animated-text").innerHTML = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
