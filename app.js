const bakery = document.querySelector(".bakery");

bakery.addEventListener("click", function () {
  name = prompt("What's the name of your bakery ?");
  bakery.innerHTML = name;
});
