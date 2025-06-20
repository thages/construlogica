window.addEventListener('DOMContentLoaded', () => {
  if (window.ScrollReveal) {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 800,
      easing: 'ease-out',
      origin: 'bottom',
      reset: false
    });
    sr.reveal('.reveal');
    sr.reveal('.card-obra', { interval: 150 });
  }
});
