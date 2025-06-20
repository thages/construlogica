// Smooth active section highlighting
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#nav a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href').slice(1) === entry.target.id);
        });
      }
    });
  }, {threshold: 0.6});

  sections.forEach(sec => observer.observe(sec));
});
