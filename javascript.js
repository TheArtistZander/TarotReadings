// Welcome message
window.addEventListener('load', () => {
  alert("Welcome to Tarot Readings by Sam 🌟");
});

// Highlight active nav link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Sparkle effect on heading
const heading = document.querySelector('.intro h2');
heading.addEventListener('mouseenter', () => {
  heading.style.textShadow = '0 0 10px #ff99cc, 0 0 20px #ccffcc';
});

heading.addEventListener('mouseleave', () => {
  heading.style.textShadow = 'none';
});
