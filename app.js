const helpButton = document.querySelector(".help");

helpButton.addEventListener("clic", (event) => {
  const helpCard = document.createElement("div");
  helpCard.classList.add("card-help");
  helpButton.appendChild(helpCard);

  const textRule = document.createElement("p");
  textRule.innerHTML =
    "Le jeu est très simple : - Préparez le plus de chocolatines possible en cliquant sur ou en touchant la chocolatine géante le plus rapidement possible. - Dès que vous avez suffisamment de chocolatines, allez à la boutique et utilisez-les pour acheter des améliorations et cuisiner encore plus rapidement !";
  helpCard.appendChild(textRule);
});
