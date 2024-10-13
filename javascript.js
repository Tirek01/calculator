function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === '0') {
        return display.textContent = 'ERROR';
    } else {
        return a / b;
    }
}

let firstNumber;
let secondNumber;
let operator = null;
let displayValue = '';

function operate(oper, firstNum, secondNum = firstNum) {
    if (oper === null) {
        return firstNum;
    } else {
        return oper(firstNum, secondNum);
    }
}

function sum() {
    let sum = operate(operator, firstNumber, secondNumber);
    display.textContent = sum;
    firstNumber = sum;
    operator = null;
}
// display, numbers and floating point
const display = document.querySelector('.display');
const btnNumber = document.querySelectorAll('.number');
const floatingPoint = document.querySelector('.floatingPoint');

btnNumber.forEach((element) => {
    element.addEventListener('click', () => {
        displayValue += element.id;
        displayValue = (displayValue === '.') ? `0${displayValue}` : displayValue;
        floatingPoint.disabled = displayValue.includes('.');
        if (operator === null) {
            firstNumber = displayValue;
        } else {
            secondNumber = displayValue;
        }
        display.textContent = displayValue;
    })
})


// operator buttons
const btnOperator = document.querySelectorAll('.operator');
btnOperator.forEach((element) => {
    element.addEventListener('click', () => {
        // calculate sum first if user select next operrand instead of =
        if (operator !== null) sum();
        
        switch (element.id) {
            case 'add':
                operator = add;
                break;
            case 'subtract':
                operator = subtract;
                break;             
            case 'multiply':
                operator = multiply;
                break;
            case 'divide':
                operator = divide;
                break;                     
            default:
                break;
        }
        displayValue = '';
        secondNumber = undefined;
        floatingPoint.disabled = false;
    })
})

// calculate the sum
const btnSum = document.querySelector('#equal');
btnSum.addEventListener('click', () => sum());

// clear calculator (existing data)
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    displayValue = '';
    display.textContent = 0;
})

// backspace delete last number
const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    floatingPoint.disabled = displayValue.includes('.');
    display.textContent = displayValue ? displayValue : 0; 
})

// button hight always equal width
const btn = document.querySelector('button');
const style = getComputedStyle(btn);
const row = document.querySelectorAll('.row');
row.forEach(element => {
    element.setAttribute('style', `height: ${style.width}`);
})


















