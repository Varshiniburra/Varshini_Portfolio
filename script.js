// ---------- Typed.js for hero text ----------
document.addEventListener("DOMContentLoaded", () => {
  // typed.js init
  const typed = new Typed("#typed", {
    strings: [
      "Java Full Stack Developer",
      "Backend Engineer (Spring Boot)",
      "Frontend Creator (HTML/CSS/JS)",
      "Problem Solver & Team Player"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1300,
    loop: true,
    showCursor: false
  });

  // AOS init
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out"
    });
  }

  // Set current year in footer
  const yr = new Date().getFullYear();
  document.getElementById("year").textContent = yr;

  // Theme toggle (simple light/dark switch)
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-mode");
    themeToggle.textContent = document.documentElement.classList.contains("light-mode") ? "☀️" : "🌙";
  });

  // GSAP subtle motion on blobs and preview card
  if (window.gsap) {
    try {
      gsap.to(".blob-1", { y: -20, x: 10, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".blob-2", { y: 30, x: -20, duration: 7.2, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".blob-3", { y: -18, x: 12, duration: 8.1, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.from(".card-preview", { y: 18, rotation: -1.5, duration: 1.4, ease: "power2.out" });
    } catch(e) { console.warn(e) }
  }
});

// ---------- Small helper to open links from project cards ----------
function openInNew(ev, url) {
  ev.preventDefault();
  if (url && url !== "#") window.open(url, "_blank", "noopener");
}

// ---------- Contact form demo (replace with real backend integration) ----------
function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  // demo behaviour — replace with AJAX/fetch to your email API
  alert(`Thanks ${name}! (Demo) Message sent. Replace sendMessage() to integrate with your backend or email provider.`);
  document.getElementById("contactForm").reset();
}
