const errorImgDisabled = document.querySelectorAll(".error-img-disable");
const errorTextDisabled = document.querySelectorAll(".error-text-disable");
const submit = document.getElementById("form");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const pswd = document.getElementById("password");

const firstNameValue = firstName.value.trim();
const lastNameValue = lastName.value.trim();
const emailValue = email.value.trim();
// const pswdValue = pswd.value.trim();

errorTextDisabled.forEach((err) => {
	err.addEventListener("click", () => {
		console.log(errorImgDisabled);
	});
});

const activateError = (activate) => {
	activate.classList.toggle("block");
	// activate.classList.toggle("error-text-active");
	activate.previousElementSibling.classList.toggle("border-[#ff7a7a]");
	let img = activate.previousElementSibling.querySelector(".error-img-disable");
	// console.log(img.classList);
	img.classList.value = "error-img-disable block w-4";
};

let alphabets = /^[a-zA-Z]+$/;

submit.addEventListener("submit", (e) => {
	e.preventDefault();
	if (
		!firstNameValue.match(alphabets) &&
		/[0 - 9]/.test(firstName) &&
		!lastNameValue.match(alphabets) &&
		emailValue.indexOf("@") === -1
		// &&
		// pswd
	) {
		// errorImgDisabled.forEach(activateErr or);
		errorTextDisabled.forEach((text) => {
			const previousDiv = text.previousElementSibling;
			console.log(previousDiv);
			if (previousDiv && previousDiv.nodeType === Node.ELEMENT_NODE) {
				const inputElement = previousDiv.querySelector("input");

				if (
					inputElement &&
					!inputElement.value.trim() &&
					inputElement.value.length < 8
				) {
					// Do something with the input element
					activateError(text);
				} else {
					console.log(inputElement.value.trim());
				}
			} else {
				console.log("not node type");
			}
		});
	} else {
		console.log("success");
	}
});
