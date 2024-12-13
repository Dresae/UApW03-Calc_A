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

// Close calculator when clicking outside
document.addEventListener('click', (e) => {
    if (!calculator.contains(e.target) && !calculatorIcon.contains(e.target) && isOpen) {
        isOpen = false;
        calculator.classList.remove('active');
        calculatorIcon.style.opacity = '1';
    }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (isOpen) {
        if (e.key >= '0' && e.key <= '9' || e.key === '.') {
            appendValue(e.key);
        } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            appendValue(e.key);
        } else if (e.key === 'Enter') {
            calculate();
        } else if (e.key === 'Backspace') {
            deleteChar();
        } else if (e.key === 'Escape') {
            clearDisplay();
        }
    }
});
