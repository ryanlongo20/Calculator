function sum(a, b){
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') return sum(a,b);
    else if (operator === '-') return subtract(a,b);
    else if (operator === '*') return multiply(a,b);
    else return divide(a,b);
}