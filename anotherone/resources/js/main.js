(function(){

const button = document.querySelector("button");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
	audio.pause();
	audio.currentTime = 0;
	audio.play();
});

})();
