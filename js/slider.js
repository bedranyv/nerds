let btnSlider1 = document.querySelector(".slider-controls-button1");
let btnSlider2 = document.querySelector(".slider-controls-button2");
let btnSlider3 = document.querySelector(".slider-controls-button3");

let slider1 = document.querySelector(".slider1");
let slider2 = document.querySelector(".slider2");
let slider3 = document.querySelector(".slider3");


btnSlider1.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Открыть 2 слайдер");

	slider2.classList.remove("slider2-show");
	btnSlider2.classList.remove("slider-controls-button-current");
	slider3.classList.remove("slider3-show");
	btnSlider3.classList.remove("slider-controls-button-current");

	slider1.classList.add("slider1-show");
	btnSlider1.classList.add("slider-controls-button-current");
});

btnSlider2.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Открыть 2 слайдер");

	slider1.classList.remove("slider1-show");
	slider1.classList.remove("slider1-on-first");
	btnSlider1.classList.remove("slider-controls-button-current");
	slider3.classList.remove("slider3-show");
	btnSlider3.classList.remove("slider-controls-button-current");

	slider2.classList.add("slider2-show");
	btnSlider2.classList.add("slider-controls-button-current");
});

btnSlider3.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Открыть 2 слайдер");

	slider1.classList.remove("slider1-show");
	slider1.classList.remove("slider1-on-first");
	btnSlider1.classList.remove("slider-controls-button-current");
	slider2.classList.remove("slider2-show");
	btnSlider2.classList.remove("slider-controls-button-current");

	slider3.classList.add("slider3-show");
	btnSlider3.classList.add("slider-controls-button-current");
});

