const counterValueEl = document.querySelector('#value');
const decrementValueEl = document.querySelector('[data-action="decrement"]');
const incrementValueEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementValueEl.addEventListener('click', handlerDecrement);
incrementValueEl.addEventListener('click', handlerIncrement)

const updateCounterValue = (value) => counterValueEl.textContent = value;

function handlerDecrement() {
    counterValue -= 1;
    updateCounterValue(counterValue);
}

function handlerIncrement() {
    counterValue += 1;
    updateCounterValue(counterValue);
}