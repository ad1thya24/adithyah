console.log("main.js loaded");

document.addEventListener('DOMContentLoaded', () => {
  const typed = new Typed('#typed-output', {
    strings: [
      'Certified Ethical Hacker',
      'VAPT Engineer',
      'Cyber Security Enthusiast'
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-section').forEach(section => {
    observer.observe(section);
  });

  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
