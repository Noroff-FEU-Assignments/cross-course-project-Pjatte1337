const form = document.querySelector("#contactForm");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");


function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(message.value, 9) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}


form.addEventListener("submit", validateForm)

function checkLength(value, len) {
    if(value.trim().length > len){
        return alert("Thank You! The Form Is Sent!");
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}






