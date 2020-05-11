let btnShow = document.querySelector(".footer-address-write-us-button");
let btnClose = document.querySelector(".modal-close-button");

let modalWrite = document.querySelector(".modal-write-to-us");

let inputName = document.querySelector(".modal-form-input-name");
let inputEmail = document.querySelector(".modal-form-input-email");
let inputTextarea = document.querySelector(".modal-form-input-textarea");

let form = modalWrite.querySelector("form");


// Открываем модальное окно

btnShow.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Кнопка открыть модалку");

	modalWrite.classList.add("modal-write-to-us-show");

	inputName.focus();

});

function removePopup() {
	modalWrite.classList.remove("modal-write-to-us-show");
	modalWrite.classList.remove("modal-write-to-us-close");
	inputName.classList.remove("modal-form-input-invalid");
	inputEmail.classList.remove("modal-form-input-invalid");
	inputTextarea.classList.remove("modal-form-input-invalid");
	}

btnClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Закрыть");

	modalWrite.classList.add("modal-write-to-us-close");

	setTimeout(removePopup, 300);
	
});


// Проверка на валидность формы, запрет отправки с пустыми полями 

form.addEventListener("submit", function (evt) {
	inputName.classList.remove("modal-form-input-invalid");
	inputEmail.classList.remove("modal-form-input-invalid");
	inputTextarea.classList.remove("modal-form-input-invalid");
	if (!inputName.value || !inputEmail.value || !inputTextarea.value) {
		evt.preventDefault();
		console.log("Введите текст");
		if (!inputName.value) {
			inputName.classList.add("modal-form-input-invalid");
		}
		if (!inputEmail.value) {
			inputEmail.classList.add("modal-form-input-invalid");
		}
		if (!inputTextarea.value) {
			inputTextarea.classList.add("modal-form-input-invalid");
		}
	}
});