const words = ["Industriales", "Comerciales", "Rurales"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const el = document.getElementById("dynamic-word");
  const current = words[wordIndex];

  if (!deleting) {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
  } else {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, 120);
}

document.addEventListener("DOMContentLoaded", typeEffect);
