const inputList = document.querySelectorAll('input');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', formValidation);
inputList.forEach(input => {input.addEventListener('change', inputValidation)})

function formValidation() {
    inputList.forEach((input) => {
        // We add the possible-invalid class to everyone because the input:valid selector has higher specificity in CSS
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