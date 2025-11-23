/* =========================================================
   SMOOTH SCROLL TO SECTIONS
========================================================= */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

/* =========================================================
   THEME TOGGLE WITH ICON AND ROTATION
========================================================= */
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  const toggleButton = document.getElementById('theme-toggle');

  // Toggle dark/light mode
  body.classList.toggle('dark');
  body.classList.toggle('light');

  // Animate icon rotation
  icon.classList.remove('rotate'); // reset animation
  void icon.offsetWidth;           // force reflow
  icon.classList.add('rotate');

  // Change icon depending on theme
  if (body.classList.contains('dark')) {
    icon.src = 'assets/icons/sun.png';  // dark mode → show sun
  } else {
    icon.src = 'assets/icons/moon.png'; // light mode → show moon
  }
}

/* =========================================================
   FADE-IN ON SCROLL
========================================================= */
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0)';
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/* =========================================================
   OPTIONAL: INITIAL SETTINGS
========================================================= */
// Ensure the theme icon matches the default mode on page load
window.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('theme-icon');
  if (document.body.classList.contains('dark')) {
    icon.src = 'assets/icons/sun.png';
  } else {
    icon.src = 'assets/icons/moon.png';
  }
});
