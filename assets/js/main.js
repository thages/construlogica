// counter animation
function animateCounter(el, target) {
  let count = 0;
  const step = Math.ceil(target / 100);
  function update() {
    count += step;
    if (count > target) count = target;
    el.textContent = count + (el.dataset.suffix || '');
    if (count < target) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target, 10));
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => observer.observe(counter));
});
