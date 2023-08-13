const inputList = document.querySelectorAll('input');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', formValidation);
inputList.forEach(input => {input.addEventListener('change', inputValidation)})

function formValidation() {
    inputList.forEach((input) => {
        input.classList.add('possible-invalid');

        if(!input.checkValidity()) {
            input.parentElement.classList.add('invalid-message');
        }
    });
}

function inputValidation() {
    if (this.checkValidity()) {
        this.parentElement.classList.remove('invalid-message');
    }
}