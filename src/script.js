document.addEventListener('DOMContentLoaded', () => {
    
    const addBtn = document.getElementById('add');
    const subtractBtn = document.getElementById('subtract');
    const multiplyBtn = document.getElementById('multiply');
    const divideBtn = document.getElementById('divide');
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultDisplay = document.getElementById('result');

    const sinBtn = document.getElementById('sin');
    const cosBtn = document.getElementById('cos');
    const tanBtn = document.getElementById('tan');
    const cotBtn = document.getElementById('cot');
    const angleInput = document.getElementById('angle');
    const trigResultDisplay = document.getElementById('trig-result');

    addBtn.addEventListener('click', () => {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        resultDisplay.textContent = num1 + num2;
    });

    subtractBtn.addEventListener('click', () => {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        resultDisplay.textContent = num1 - num2;
    });

    multiplyBtn.addEventListener('click', () => {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        resultDisplay.textContent = num1 * num2;
    });

    divideBtn.addEventListener('click', () => {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        if (num2 !== 0) {
            resultDisplay.textContent = (num1 / num2).toFixed(2); 
        } else {
            resultDisplay.textContent = 'Cannot divide by zero';
        }
    });

    sinBtn.addEventListener('click', () => {
        const angle = parseFloat(angleInput.value);
        const radians = angle * (Math.PI / 180); 
        trigResultDisplay.textContent = Math.sin(radians).toFixed(2); 
    });

    cosBtn.addEventListener('click', () => {
        const angle = parseFloat(angleInput.value);
        const radians = angle * (Math.PI / 180);
        trigResultDisplay.textContent = Math.cos(radians).toFixed(2); 
    });

    tanBtn.addEventListener('click', () => {
        const angle = parseFloat(angleInput.value);
        const radians = angle * (Math.PI / 180);
        trigResultDisplay.textContent = Math.tan(radians).toFixed(2); 
    });

    cotBtn.addEventListener('click', () => {
        const angle = parseFloat(angleInput.value);
        const radians = angle * (Math.PI / 180);
        const tanValue = Math.tan(radians);
        if (tanValue !== 0) {
            trigResultDisplay.textContent = (1 / tanValue).toFixed(2);
        } else {
            trigResultDisplay.textContent = 'Undefined (tan = 0)';
        }
    });
});

