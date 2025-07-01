var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  slidesPerView: "auto",
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 25,
    depth: 200,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
