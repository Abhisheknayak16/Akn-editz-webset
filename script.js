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
/* Home Section Styling */
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background: linear-gradient(135deg, #0f0f0f, #1a1a1a); /* Dark Gradient Background */
    color: #fff;
}

.content {
    max-width: 90%;
    padding: 20px;
}

/* Welcome Text Animation */
.hidden {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.visible {
    opacity: 1;
    transform: translateY(0);
}

h1 {
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #ff7300, #ff004c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.sub-heading {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 10px;
}

/* 3D Button Styling */
.btn-3d {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    background: linear-gradient(90deg, #ff7300, #ff004c);
    border: none;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(255, 115, 0, 0.5);
    transition: all 0.3s ease-in-out;
}

.btn-3d:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 115, 0, 0.7);
  }
