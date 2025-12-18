// Scroll reveal (your original)
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Mobile nav (works if .nav-toggle exists on a page)
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (toggle && navLinks) {
  toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}

// FAQ accordion (works if .faq-item exists)
document.querySelectorAll(".faq-q").forEach(q => {
  q.addEventListener("click", () => {
    const item = q.closest(".faq-item");
    item.classList.toggle("open");
  });
});
