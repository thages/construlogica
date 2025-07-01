document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel3d');
  if (!carousel) return;
  const cells = carousel.querySelectorAll('.carousel-item');
  const cellCount = cells.length;
  const radius = 300;
  cells.forEach((cell, i) => {
    const angle = (i / cellCount) * 360;
    cell.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
  });

  let selectedIndex = 0;
  function rotate() {
    const angle = (selectedIndex / cellCount) * -360;
    anime({
      targets: carousel,
      rotateY: angle,
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  }

  document.getElementById('next').addEventListener('click', () => {
    selectedIndex++;
    rotate();
  });

  document.getElementById('prev').addEventListener('click', () => {
    selectedIndex--;
    rotate();
  });

  setInterval(() => {
    selectedIndex++;
    rotate();
  }, 5000);
});
