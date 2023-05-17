const bakery = document.querySelector(".bakery");

const chocoButton = document.querySelector(".choco");
let score = document.querySelector(".score");

let count = 0;

// Actualise le score toutes les 50 millisecondes
setInterval(function () {
  score.innerHTML = `${count} Chocos`;
}, 50);

chocoButton.addEventListener("click", function () {
  count++;
});

const worker = document.querySelector(".worker");
// Augmente de 10 le score
function baker() {
  count = count + 10;
}
// Répète une fonction toutes les secondes
worker.addEventListener("click", function () {
  setInterval(baker, 1000);
});

// Rend invisible le worker
worker.classList.add("disable");
// Fait apparaître le worker quand le score atteint 10
chocoButton.addEventListener("click", function () {
  if (count > 10) {
    worker.classList.remove("disable");
  }
});
