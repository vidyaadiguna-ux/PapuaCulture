// NAVBAR SCROLL EFFECT
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "0 3px 12px rgba(0,0,0,0.15)";
        navbar.style.backdropFilter = "blur(6px)";
    } else {
        navbar.style.background = "white";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
});

// SMOOTH SCROLL
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
        const target = link.getAttribute("href");
        if (target.startsWith("#")) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// FADE-IN ANIMATION
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
