const words = ["Industriales", "Comerciales", "Rurales"];
let currentIndex = 0;

function updateWord() {
  const wordElement = document.getElementById("dynamic-word");
  currentIndex = (currentIndex + 1) % words.length;
  wordElement.textContent = words[currentIndex];
}

setInterval(updateWord, 2010);
