//bouton click sound 
const sound = new Audio();
audio.src = "./microwavebell.mp3";

microwaveBell.addEventListener("click", () => {
    audioPlay.play();
});