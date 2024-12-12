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
