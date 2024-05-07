let displayContents = '';
let operator = '';
let operandQueue = '';
let firstOperand = '';
let secondOperand = '';
let result;

let displayCurrent = document.querySelector('#display_current');
let displayPrevious = document.querySelector('#display_previous');
let equalsBtn = document.querySelector('#equals');
let clearBtn = document.querySelector('#clear');


// adding event listeners to digit buttons
digitButtons = document.querySelectorAll('.digit');
for (button of digitButtons){
    button.addEventListener('click', queueDigit);
    button.addEventListener('click', displayButtonContents);
};

// adding event listeners to equals button
equalsBtn.addEventListener('click', getOperand);
equalsBtn.addEventListener('click', displayButtonContents);
equalsBtn.addEventListener('click', triggerCalculate);

// adding event listeners to operators
operatorBtns = document.querySelectorAll('.operator');
for (button of operatorBtns){
    button.addEventListener('click', getOperand);
    button.addEventListener('click', triggerCalculate); // we first try to trigger calculate, because the operator can already be defined
    button.addEventListener('click', getOperator);      // after that we overwrite the operator
    button.addEventListener('click', displayButtonContents);
};

//adding event listeners for clear button
clearBtn.addEventListener('click', clearAll);

// digit functions
function queueDigit(e){
    operandQueue += e.currentTarget.value;
}

// operator functions
function getOperand(){
    if (firstOperand == ''){
        firstOperand = operandQueue;
        console.log(`First operand ${firstOperand}`);
    } else {
        secondOperand = operandQueue;
        console.log(`Second operand ${secondOperand}`);
    };

    operandQueue = '';
}


function getOperator(e){
    operator = e.target.value;
};

function triggerCalculate(e){
    if(operator != ''){
        calculate();
        console.log('Calculate triggered!');

        displayContents = [firstOperand, operator, secondOperand, '='].join('');
        displayPrevious.textContent = displayContents;

        if(e.currentTarget.value == '='){
            firstOperand = '';
            operandQueue = result;
            operator  = '';
            displayContents = result;
            displayCurrent.textContent = displayContents;
        } else {
            operator = e.currentTarget.value;
            firstOperand = result;
            displayContents = firstOperand;
            displayCurrent.textContent = displayContents;
        };

        secondOperand = '';
        console.log(`After calculate: First operand ${firstOperand}; Second operand ${secondOperand}; operator ${operator}`)
    };
};

// display functions
function displayButtonContents(e){
    displayContents += e.currentTarget.value;
    displayCurrent.textContent = displayContents;
};

// calculation functions only calculates
function calculate(){
    if (operator == '+'){
        result = Number(firstOperand) + Number(secondOperand);
    } else if (operator == '-'){
        result = Number(firstOperand) - Number(secondOperand);
    } else if (operator == '*'){
        result = Number(firstOperand) * Number(secondOperand);
    } else if (operator == '/'){
        result = Number(firstOperand) / Number(secondOperand);
    };
};

//clear All
function clearAll(){
    displayContents = '';
    displayCurrent.textContent = '';
    displayPrevious.textContent = '';
    firstOperand = '';
    secondOperand = '';
    operandQueue = '';
    operator = '';
};