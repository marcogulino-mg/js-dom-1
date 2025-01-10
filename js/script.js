//CAMBIO IMMAGINE TRAMITE IL BOTTONE DOPO AVERLO PREMUTO
const lampBtn = document.querySelector(".btn-lamp");
const imgFrame = document.querySelector(".light-state");

lampBtn.addEventListener("click", function () {
  lampBtn.innerHTML = "Spegni";
  imgFrame.src = "./img/yellow_lamp.png";
});