<<<<<<< HEAD
const helpButton = document.querySelector(".help");

helpButton.addEventListener("clic", (event) => {
  const helpCard = document.createElement("div");
  helpCard.classList.add("card-help");
  helpButton.appendChild(helpCard);

  const textRule = document.createElement("p");
  textRule.innerHTML =
    "Le jeu est très simple : - Préparez le plus de chocolatines possible en cliquant sur ou en touchant la chocolatine géante le plus rapidement possible. - Dès que vous avez suffisamment de chocolatines, allez à la boutique et utilisez-les pour acheter des améliorations et cuisiner encore plus rapidement !";
  helpCard.appendChild(textRule);
=======
//Nom de la boulangerie
const bakery = document.querySelector(".bakery");

//Fenêtre prompt
const promptWindow = document.querySelector(".prompt");
promptWindow.classList.add("invisible");

//Input du nom de la boulangerie
const bakeryName = document.querySelector("#bakeryName");

//Cliquer sur le nom de la boulangerie affiche un prompt pour le changer
bakery.addEventListener("click", function () {
  promptWindow.classList.remove("invisible");
  background.classList.remove("invisible");
});

//Appuyer sur Entrée change le nom de la boulangerie et ferme le prompt
bakeryName.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && bakeryName.value !== "") {
    bakery.innerHTML = bakeryName.value;
    promptWindow.classList.add("invisible");
    background.classList.add("invisible");
  }
});

//Bouton confirmer du prompt
const confirmButton = document.querySelector(".confirm");

//Appuyer sur le bouton confirme le changement de nom et ferme le prompt
confirmButton.addEventListener("click", function () {
  if (bakeryName.value !== "") {
    bakery.innerHTML = bakeryName.value;
    promptWindow.classList.add("invisible");
    background.classList.add("invisible");
  }
});

//Bouton annuler du prompt
const cancelButton = document.querySelector(".cancel");

//Appuyer sur le bouton ferme le prompt
cancelButton.addEventListener("click", function () {
  promptWindow.classList.add("invisible");
  background.classList.add("invisible");
});

//Filtre qui floute l'arrière-plan du prompt
const background = document.querySelector(".background");
background.classList.add("invisible");

//Quand on clique sur l'arrière-plan on ferme le prompt
background.addEventListener("click", function () {
  promptWindow.classList.add("invisible");
  background.classList.add("invisible");
>>>>>>> fdb51656e88db3827e196824670d955a166d93be
});
