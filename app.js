let theInput = document.querySelector('.username');
let regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let warning = document.querySelector('.error-text');
let warningSymbol = document.querySelector('.error');

function checkEmail(email) {
    if (regexExp.test(email)) {

        warning.classList.add('hidden');
        warningSymbol.classList.add('hidden');

    } else {
        warning.classList.remove('hidden');
        warningSymbol.classList.remove('hidden');
    }

}
theInput.addEventListener('change', () => {
    let inputValue = theInput.value;
    checkEmail(inputValue);
})