// 🌟 Custom Welcome Banner
window.addEventListener('load', () => {
  const welcome = document.createElement('div');
  welcome.textContent = "🔮 Welcome to Tarot Readings by Sam!";
  Object.assign(welcome.style, {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#ff99cc',
    color: '#1f4037',
    padding: '1rem 2rem',
    borderRadius: '12px',
    boxShadow: '0 0 10px pink',
    zIndex: '1000',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
  });
  document.body.appendChild(welcome);
  setTimeout(() => welcome.remove(), 4000);
});

// 🧭 Highlight Active Nav Link & Save Selection
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    localStorage.setItem('activeNav', link.textContent);
  });
});

const savedNav = localStorage.getItem('activeNav');
navLinks.forEach(link => {
  if (link.textContent === savedNav) {
    link.classList.add('active');
  }
});

// ✨ Sparkle Effect on Intro Heading
const heading = document.querySelector('.intro h2');
const originalShadow = heading.style.textShadow;

heading.addEventListener('mouseenter', () => {
  heading.style.textShadow = '0 0 10px #ff99cc, 0 0 20px #ccffcc';
});

heading.addEventListener('mouseleave', () => {
  heading.style.textShadow = originalShadow || '';
});
