const toggleBtn = document.querySelector("#toggle");
const close = document.querySelector("#close");
const signUpBtn = document.querySelector("#open");
const modal = document.querySelector("#modal");
const body = document.querySelector("body");

//Toggle Menu
toggleBtn.addEventListener("click", () => {
	body.classList.toggle("showNav");
});

//Show Modal
signUpBtn.addEventListener("click", () => {
	modal.classList.add("showModal");
});

//Close Modal
close.addEventListener("click", () => {
	modal.classList.remove("showModal");
});

//Hide Modal on outsite click
window.addEventListener("click", (e) => {
	e.target === modal ? modal.classList.remove("showModal") : false;
});
