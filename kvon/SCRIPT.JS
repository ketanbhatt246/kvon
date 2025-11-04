

// ---------- NAVBAR TOGGLE ----------
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  navToggle.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!navToggle.contains(e.target) && !mainNav.contains(e.target)) {
    mainNav.classList.remove("open");
    navToggle.classList.remove("active");
  }
});

// ---------- HERO ANIMATION ----------
window.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-copy h1");
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(30px)";
    setTimeout(() => {
      heroText.style.transition = "all 1s ease";
      heroText.style.opacity = 1;
      heroText.style.transform = "translateY(0)";
    }, 200);
  }
});

// ---------- SIMPLE SCROLL REVEAL ----------
const revealElements = document.querySelectorAll(".section, .card, .stat, .job");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ---------- CONTACT FORM ----------
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before sending.");
      return;
    }

    alert("Thank you for contacting KVON Company! We'll get back to you soon.");
    contactForm.reset();
  });
}

// ---------- SCROLL-TO TOP BUTTON ----------
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.background =
  "linear-gradient(90deg, #06b6d4, #8b5cf6)";
scrollBtn.style.color = "#021025";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.width = "40px";
scrollBtn.style.height = "40px";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
