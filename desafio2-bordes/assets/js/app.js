
const clickImg = document.querySelector("#clickme");


clickImg.addEventListener("click", () => {
	if (
		clickImg.style.border == null ||
		clickImg.style.border != "thick solid rgb(227, 9, 9)"
	) {
		let clickBorder = (clickImg.style.border = "thick solid rgb(227, 9, 9)");
	} else {
		let clickBorder = (clickImg.style.border = "none");
	}
});
