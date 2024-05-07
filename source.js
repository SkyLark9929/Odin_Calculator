let displayContents = '';
let operator = '';
let operandQueue = '';
let firstOperand;
let secondOperand;
let result;

let displayCurrent = document.querySelector('#display_current');
let displayPrevious = document.querySelector('#display_previous');
let clearBtn = document.querySelector('#clear');
let equalsBtn = document.querySelector('#equals');


// adding event listeners to digit buttons
digitButtons = document.querySelectorAll('.digit');
for (button of digitButtons){
    button.addEventListener('click', queueDigit);
    button.addEventListener('click', displayButtonContents);
};

// adding event listeners to equals button
equalsBtn.addEventListener('click', getSecondOperand);
equalsBtn.addEventListener('click', displayButtonContents);
equalsBtn.addEventListener('click', calculate);
equalsBtn.addEventListener('click', displayEquals);
equalsBtn.addEventListener('click', initializeOperators);

// adding event listeners to clear button
clearBtn.addEventListener('click', clearAll);

// adding event listeners to operators
initializeOperators();

function initializeOperators(){
    operatorBtns = document.querySelectorAll('.operator');
    for (button of operatorBtns){
        button.addEventListener('click', getFirstOperand);
        button.addEventListener('click', getOperator);
        button.addEventListener('click', displayButtonContents);
        button.addEventListener('click', disableOperators);
    };

    console.log(`Operators initialized`);
};

// digit functions
function queueDigit(e){
    operandQueue += e.currentTarget.value;
}

// operator functions
function getFirstOperand(){
    firstOperand = operandQueue;
    operandQueue = '';
    console.log(`First operand ${firstOperand}`);
}

function getSecondOperand(e){
    secondOperand = operandQueue;
    operandQueue = '';
    console.log(`Second operand ${secondOperand}`);
}

function getOperator(e){
    operator = e.target.value;
};

function disableOperators(){
    for (button of operatorBtns){
        button.removeEventListener('click', getFirstOperand);
        button.removeEventListener('click', getOperator);
        button.removeEventListener('click', displayButtonContents);
        button.removeEventListener('click', disableOperators);
    };
};

// display functions
function displayButtonContents(e){
    displayContents += e.currentTarget.value;
    displayCurrent.textContent = displayContents;
};

function displayEquals(){
    displayPrevious.textContent = displayContents;
    displayContents = result;
    displayCurrent.textContent = result;
};

// calculation functions
function calculate(){
    if (operator == '+'){
        result = Number(firstOperand) + Number(secondOperand);
        displayCurrent.textContent = result;
    } else if (operator == '-'){
        result = Number(firstOperand) - Number(secondOperand);
        displayCurrent.textContent = result;
    } else if (operator == '*'){
        result = Number(firstOperand) * Number(secondOperand);
        displayCurrent.textContent = result;
    } else if (operator == '/'){
        result = Number(firstOperand) / Number(secondOperand);
        displayCurrent.textContent = result;
    };

    operandQueue = result; // automatically stores result into the operand queue
    console.log(`Result: ${result}`)
};

// clear all
function clearAll(){
    operandQueue = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    displayContents = '';
    displayCurrent.textContent = '';
    displayPrevious.textContent = '';
    result = '';
}