const calculatorIcon = document.querySelector('.calculator-icon');
const calculator = document.querySelector('.calculator');
const display = document.getElementById('result');
let isOpen = false;

calculatorIcon.addEventListener('click', () => {
    isOpen = !isOpen;
    calculator.classList.toggle('active');
    if (isOpen) {
        calculatorIcon.style.opacity = '0.5';
    } else {
        calculatorIcon.style.opacity = '1';
    }
});

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}
