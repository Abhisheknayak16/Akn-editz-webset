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
