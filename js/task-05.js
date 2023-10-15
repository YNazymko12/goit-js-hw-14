const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', handlerInput);

function handlerInput(el) {
    nameOutputEl.textContent = el.target.value.length !== 0 ? `${el.target.value}` : 'Anonymous'
}