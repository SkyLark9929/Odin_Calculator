let displayContents = '';
let operator = '';
let operandQueue = '';
let firstOperand = '';
let secondOperand = '';
let result;

let displayCurrent = document.querySelector('#display_current');
let displayPrevious = document.querySelector('#display_previous');
let equalsBtn = document.querySelector('#equals');


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
equalsBtn.addEventListener('click', displayEquals);

// adding event listeners to operators
operatorBtns = document.querySelectorAll('.operator');
for (button of operatorBtns){
    button.addEventListener('click', getOperand);
    button.addEventListener('click', triggerCalculate);
    button.addEventListener('click', getOperator);
    button.addEventListener('click', displayOperators);
};

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
        calculate()
        console.log('Calculate triggered!')

        if(e.currentTarget.value == '='){
            firstOperand = '';
            operandQueue = result;
            operator  = '';
        } else {
            operator = e.currentTarget.value;
            firstOperand = result;
        };

        secondOperand = '';
        console.log(`After calculate: First operand ${firstOperand}; Second operand ${secondOperand}; operator ${operator}`)
    }
}
// display functions
function displayButtonContents(e){
    displayContents += e.currentTarget.value;
    displayCurrent.textContent = displayContents;
};

function displayOperators(){
    displayContents = firstOperand + operator;
    displayCurrent.textContent = displayContents;
};

function displayEquals(){
    displayPrevious.textContent = displayContents;
    displayContents = result;
    displayCurrent.textContent = result;
};

// calculation functions only calculates
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
};