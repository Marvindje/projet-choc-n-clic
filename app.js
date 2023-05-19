//------------------------------------------------laurene
function togglePopup() {
  let popup = document.querySelector("#popup-overlay");
  popup.classList.toggle("open");
}
//------------------------------------------------------

const compteur = document.querySelector("#compteur");
const clic = document.querySelector("#clic");
const multiplicateur = document.querySelector("#multiplicateur");
const worker1 = document.querySelector("#worker");
const worker2 = document.querySelector("#worker2");
const worker3 = document.querySelector("#worker3");
const upgrade1 = document.querySelector("#upgrade1");
const upgrade2 = document.querySelector("#upgrade2");
const upgrade3 = document.querySelector("#upgrade3");
const curseurInfo = document.querySelector("#curseurinfo");
const curseurNb = document.querySelector("#curseurnb");
const worker1Info = document.querySelector("#worker1info");
const worker1Nb = document.querySelector("#worker1nb");
const worker2Info = document.querySelector("#worker2info");
const worker2Nb = document.querySelector("#worker2nb");
const worker3Info = document.querySelector("#worker3info");
const worker3Nb = document.querySelector("#worker3nb");
const upgrade1Cost = document.querySelector("#upgrade1cost");
const upgrade2Cost = document.querySelector("#upgrade2cost");
const upgrade3Cost = document.querySelector("#upgrade3cost");

let score = 0;
let clicValue = 1;
let updatePrice = 10;
let curseurNumber = 0;
let worker1Value = 1;
let worker2Value = 1;
let worker3Value = 1;
let worker1Price = 50;
let worker2Price = 50;
let worker3Price = 50;
let upgrade1Price = 50;
let upgrade2Price = 50;
let upgrade3Price = 50;
let worker1Number = 0;
let worker2Number = 0;
let worker3Number = 0;

upgrade3.disabled = true;
upgrade2.disabled = true;
upgrade1.disabled = true;
multiplicateur.disabled = true;
worker1.disabled = true;
worker2.disabled = true;
worker3.disabled = true;

function compteurScore() {
  compteur.innerHTML = score;
}
//-------------------------------------------------------------------curseur
function scoreIncrease() {
  score = score + clicValue;
  refreshValue();
  EnablerAll();
}

function multiplicateurIncrease() {
  clicValue = clicValue + 1;
  score = score - updatePrice;
  updatePrice = updatePrice * 2;
  curseurNumber = curseurNumber + 1;
  refreshValue();
  EnablerAll();
}

function multiplicateurValue() {
  curseurInfo.innerHTML = `  curseur coute ${updatePrice}   `;
  curseurNb.innerHTML = ` ${curseurNumber}`;
}

function mutltiplicateurEnabler() {
  if (score >= updatePrice) {
    multiplicateur.disabled = false;
  } else {
    multiplicateur.disabled = true;
  }
}

//----------------------------------------------------------------Code du Worker 1
function worker1Name() {
  worker1Info.innerHTML = ` workers  coute  ${worker1Price} `;
  worker1Nb.innerHTML = `${worker1Number}`;
}

function worker1Works() {
  score = score - worker1Price;
  worker1Price = worker1Price * 2;
  worker1Number = worker1Number + 1;
  worker1Name();
  setInterval(() => {
    score = score + worker1Value;
    refreshValue();
    EnablerAll();
  }, 1000);
}

function worker1Enabler() {
  if (score >= worker1Price) {
    worker1.disabled = false;
  } else {
    worker1.disabled = true;
  }
}
//---------------------------------------------------------------------- Fin worker 1

// ----------------------------------------------------------------------Worker 2
function worker2Name() {
  worker2Info.innerHTML = ` workers  coute  ${worker1Price} `;
  worker2Nb.innerHTML = `${worker2Number}`;
}
function worker2Enabler() {
  if (score >= worker2Price) {
    worker2.disabled = false;
  } else {
    worker2.disabled = true;
  }
}

function worker2Works() {
  score = score - worker2Price;
  worker2Price = worker2Price * 2;
  worker2Number = worker2Number + 1;
  worker2Name();
  setInterval(() => {
    score = score + worker2Value;
    refreshValue();
    EnablerAll();
  }, 1000);
}
//---------------------------------------------------------------------------- fin du worker 2

//-------------------------------------------------------------------------------- Worker 3
function worker3Name() {
  worker3Info.innerHTML = ` workers  coute  ${worker3Price} `;
  worker3Nb.innerHTML = `${worker3Number}`;
}

function worker3Works() {
  score = score - worker3Price;
  worker3Price = worker3Price * 2;
  worker3Number = worker3Number + 1;
  worker3Name();
  setInterval(() => {
    score = score + worker3Value;
    refreshValue();
    EnablerAll();
  }, 1000);
}
function worker3Enabler() {
  if (score >= worker3Price) {
    worker3.disabled = false;
  } else {
    worker3.disabled = true;
  }
}
// ----------------------------------------------------------------------------fin du  worker 3

//---------------------------------------------------------------------------------upgrade 1

function upgrade1Name() {
  upgrade1Cost.innerHTML = ` coute ${upgrade1Price} `;
}

function upgradeWorker1() {
  score = score - upgrade1Price;
  worker1Value += 1;
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
  upgrade2Cost.innerHTML = ` coute ${upgrade2Price} `;
}
function upgradeWorker2() {
  score = score - upgrade2Price;
  worker2Value += 1;
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
  upgrade3Cost.innerHTML = ` coute ${upgrade3Price} `;
}
function upgradeWorker3() {
  score = score - upgrade3Price;
  worker3Value += 1;
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
  worker1Enabler();
  worker2Enabler();
  worker3Enabler();
  upgrade1Enabler();
  upgrade2Enabler();
  upgrade3Enabler();
}
//------------------------------------------------------------------------------Check toute les value des boutons
function refreshValue() {
  multiplicateurValue();
  worker1Name();
  worker2Name();
  worker3Name();
  upgrade1Name();
  upgrade2Name();
  upgrade3Name();
}

refreshValue();
EnablerAll();
worker1Name();
worker2Name();
worker3Name();
upgrade1Name();
upgrade2Name();
upgrade3Name();

//--------------------------------------------------------------------------------------Event
clic.addEventListener("click", scoreIncrease);
multiplicateur.addEventListener("click", multiplicateurIncrease);
worker1.addEventListener("click", worker1Works);
worker2.addEventListener("click", worker2Works);
worker3.addEventListener("click", worker3Works);
upgrade1.addEventListener("click", upgradeWorker1);
upgrade2.addEventListener("click", upgradeWorker2);
upgrade3.addEventListener("click", upgradeWorker3);

//------------------------------------------------------------------------Cédric
