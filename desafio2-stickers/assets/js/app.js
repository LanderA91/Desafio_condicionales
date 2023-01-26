
const frase = document.querySelector("#frase");
const verBtn = document.querySelector("#verBtn");

    verBtn.addEventListener("click", () => {
	let alien = document.querySelector("#alien1").value;
	let pizza = document.querySelector("#pizza2").value;
	let musica = document.querySelector("#musica3").value;
	let Totally = parseInt(alien) + parseInt(pizza) + parseInt(musica);

	if (Totally === 0) {
		frase.textContent = "SELECCIONA TUS STICKERS";
		return;
	}

	if (Totally > 10) {
		frase.textContent = "Llevas demasiados stickers";
	} else {
		frase.textContent = "Que disfrutes tus ${Totally} stickers";
	}
});
