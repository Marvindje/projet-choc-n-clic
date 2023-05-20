//------------------------------------------------laurene
function togglePopup() {
  let popup = document.querySelector("#popup-overlay");
  popup.classList.toggle("open");
}
//--------------------------------- killian --------------------------------//

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
});

//---------------------------------------------------------------------------//

const compteur = document.querySelector("#compteur");
const clic = document.querySelector("#clic");
const curseur = document.querySelector("#curseur");
const commis = document.querySelector("#commis");
const patissier = document.querySelector("#patissier");
const chef = document.querySelector("#chef");
const upgrade1 = document.querySelector("#upgrade1");
const upgrade2 = document.querySelector("#upgrade2");
const upgrade3 = document.querySelector("#upgrade3");
const curseurInfo = document.querySelector("#curseurinfo");
const curseurNb = document.querySelector("#curseurnb");
const commisInfo = document.querySelector("#commisinfo");
const commisNb = document.querySelector("#commisnb");
const patissierInfo = document.querySelector("#patissierinfo");
const patissierNb = document.querySelector("#patissiernb");
const chefInfo = document.querySelector("#chefinfo");
const chefNb = document.querySelector("#chefnb");
const upgrade1Cost = document.querySelector("#upgrade1cost");
const upgrade2Cost = document.querySelector("#upgrade2cost");
const upgrade3Cost = document.querySelector("#upgrade3cost");

let score = 0;
let clicValue = 1;
let updatePrice = 10;
let curseurNumber = 0;
let commisValue = 1;
let patissierValue = 1;
let chefValue = 1;
let commisPrice = 50;
let patissierPrice = 50;
let chefPrice = 50;
let upgrade1Price = 50;
let upgrade2Price = 50;
let upgrade3Price = 50;
let commisNumber = 0;
let patissierNumber = 0;
let chefNumber = 0;

upgrade3.disabled = true;
upgrade2.disabled = true;
upgrade1.disabled = true;
curseur.disabled = true;
commis.disabled = true;
patissier.disabled = true;
chef.disabled = true;

function compteurScore() {
  compteur.innerHTML = score;
}
//-------------------------------------------------------------------curseur
function scoreIncrease() {
  score = score + clicValue;
  refreshValue();
  EnablerAll();
}

function curseurIncrease() {
  clicValue = clicValue + 1;
  score = score - updatePrice;
  updatePrice = updatePrice * 2;
  curseurNumber = curseurNumber + 1;
  refreshValue();
  EnablerAll();
}

function curseurValue() {
  curseurInfo.innerHTML = `  Un clic rapporte ${clicValue} prix: ${updatePrice}   `;
  curseurNb.innerHTML = ` ${curseurNumber}`;
}

function mutltiplicateurEnabler() {
  if (score >= updatePrice) {
    curseur.disabled = false;
  } else {
    curseur.disabled = true;
  }
}

//----------------------------------------------------------------Code commis
function commisName() {
  commisInfo.innerHTML = `Cuisine ${commisValue} choco/s. prix: ${commisPrice} `;
  commisNb.innerHTML = `${commisNumber}`;
}

function commisWorks() {
  score = score - commisPrice;
  commisPrice = commisPrice * 2;
  commisNumber = commisNumber + 1;
  commisName();
  setInterval(() => {
    score = score + commisValue;
    refreshValue();
    EnablerAll();
  }, 1000);
}

function commisEnabler() {
  if (score >= commisPrice) {
    commis.disabled = false;
  } else {
    commis.disabled = true;
  }
}
//---------------------------------------------------------------------- Fin Commis

// ----------------------------------------------------------------------patissier
function patissierName() {
  patissierInfo.innerHTML = ` Cuisine ${patissierValue}choco/s. prix:${patissierPrice} `;
  patissierNb.innerHTML = `${patissierNumber}`;
}
function patissierEnabler() {
  if (score >= patissierPrice) {
    patissier.disabled = false;
  } else {
    patissier.disabled = true;
  }
}

function patissierWorks() {
  score = score - patissierPrice;
  patissierPrice = patissierPrice * 2;
  patissierNumber = patissierNumber + 1;
  patissierName();
  setInterval(() => {
    score = score + patissierValue;
    refreshValue();
    EnablerAll();
  }, 1000);
}
//---------------------------------------------------------------------------- fin Patissier

//-------------------------------------------------------------------------------- Chef
function chefName() {
  chefInfo.innerHTML = `Cuisine ${chefValue} choco/s. prix:${chefPrice} `;
  chefNb.innerHTML = `${chefNumber}`;
}

function chefWorks() {
  score = score - chefPrice;
  chefPrice = chefPrice * 2;
  chefNumber = chefNumber + 1;
  chefName();
  setInterval(() => {
    score = score + chefValue;
    refreshValue();
    EnablerAll();
  }, 1000);
}
function chefEnabler() {
  if (score >= chefPrice) {
    chef.disabled = false;
  } else {
    chef.disabled = true;
  }
}
// ----------------------------------------------------------------------------fin du chef

//---------------------------------------------------------------------------------upgrade 1

function upgrade1Name() {
  upgrade1Cost.innerHTML = `prix: ${upgrade1Price} `;
}

function upgradecommis() {
  score = score - upgrade1Price;
  commisValue += 1;
  upgrade1Price = upgrade1Price * 2;
  refreshValue();
  //compteurScore();
}

function upgrade1Enabler() {
  if (score >= upgrade1Price) {
    upgrade1.disabled = false;
  } else {
    upgrade1.disabled = true;
  }
}

//-------------------------------------------------------------------------------------fin upgrade 1
//---------------------------------------------------------------------------------------upgrade2

function upgrade2Name() {
  upgrade2Cost.innerHTML = ` prix: ${upgrade2Price} `;
}
function upgradepatissier() {
  score = score - upgrade2Price;
  patissierValue += 1;
  upgrade2Price = upgrade2Price * 2;
  refreshValue();
}

function upgrade2Enabler() {
  if (score >= upgrade2Price) {
    upgrade2.disabled = false;
  } else {
    upgrade2.disabled = true;
  }
}

//------------------------------------------------------------------------------------fin de l'upgrade 2
//----------------------------------------------------------------------------------- upgrade 3
upgrade3Name();
function upgrade3Name() {
  upgrade3Cost.innerHTML = ` prix ${upgrade3Price} `;
}
function upgradechef() {
  score = score - upgrade3Price;
  chefValue += 1;
  upgrade3Price = upgrade3Price * 2;
  refreshValue();
}
function upgrade3Enabler() {
  if (score >= upgrade2Price) {
    upgrade3.disabled = false;
  } else {
    upgrade3.disabled = true;
  }
}

//----------------------------------------------------------------------------------------Fin upgrade 3
setInterval(() => compteurScore(), 50);

//-------------------------------------------------------------------------check toute les condition pour que les bouton s'active
function EnablerAll() {
  mutltiplicateurEnabler();
  commisEnabler();
  patissierEnabler();
  chefEnabler();
  upgrade1Enabler();
  upgrade2Enabler();
  upgrade3Enabler();
}
//------------------------------------------------------------------------------Check toute les value des boutons
function refreshValue() {
  curseurValue();
  commisName();
  patissierName();
  chefName();
  upgrade1Name();
  upgrade2Name();
  upgrade3Name();
}

refreshValue();
EnablerAll();
commisName();
patissierName();
chefName();
upgrade1Name();
upgrade2Name();
upgrade3Name();

//--------------------------------------------------------------------------------------Event
clic.addEventListener("click", scoreIncrease);
curseur.addEventListener("click", curseurIncrease);
commis.addEventListener("click", commisWorks);
patissier.addEventListener("click", patissierWorks);
chef.addEventListener("click", chefWorks);
upgrade1.addEventListener("click", upgradecommis);
upgrade2.addEventListener("click", upgradepatissier);
upgrade3.addEventListener("click", upgradechef);

//------------------------------------------------------------------------Cédric
