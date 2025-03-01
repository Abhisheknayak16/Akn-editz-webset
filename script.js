// Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const themeToggle = document.getElementById("theme-toggle");
   const body = document.body;

   // Check localStorage for theme preference
   if (localStorage.getItem("theme") === "light") {
     body.classList.add("light-mode");
     themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
   }

   // Toggle Theme
   themeToggle.addEventListener("click", () => {
     body.classList.toggle("light-mode");
     if (body.classList.contains("light-mode")) {
       localStorage.setItem("theme", "light");
       themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
     } else {
       localStorage.setItem("theme", "dark");
       themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
     }
   });
document.addEventListener("DOMContentLoaded", function() {
    let navbar = document.querySelector(".navbar");

    // Swipe (Touch) ke liye Event Listener
    let isDown = false;
    let startX;
    let scrollLeft;

    navbar.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - navbar.offsetLeft;
        scrollLeft = navbar.scrollLeft;
    });

    navbar.addEventListener("mouseleave", () => {
        isDown = false;
    });

    navbar.addEventListener("mouseup", () => {
        isDown = false;
    });

    navbar.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - navbar.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        navbar.scrollLeft = scrollLeft - walk;
    });
});
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const typedText = document.querySelector(".typing-effect");
        const text = "Welcome to AKN Edits";
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                typedText.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 150); // टाइपिंग स्पीड 
            }
        }

        typeEffect();
    });
</script>
