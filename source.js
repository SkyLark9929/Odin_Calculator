let displayContents = '0';
let operator = '';
let operandQueue = '0';
let firstOperand = '';
let secondOperand = '';
let btnValue = '';
let result;
let operatorRe = RegExp('(\\d+\\.*\\d[+*\/-])');

let displayCurrent = document.querySelector('#display_current');
let displayPrevious = document.querySelector('#display_previous');
let equalsBtn = document.querySelector('#equals');
let clearBtn = document.querySelector('#clear');
let dotBtn = document.querySelector('#dot');

displayCurrent.textContent = displayContents;

// FIXME screen overflow upon number entering

// adding event listeners to digit buttons
digitButtons = document.querySelectorAll('.digit');
for (button of digitButtons){
    button.addEventListener('click', queueDigit);
    button.addEventListener('click', displayButtonContents);
};

//adding event listeners to dot
dotBtn.addEventListener('click', displayButtonContents, {once: true});
dotBtn.addEventListener('click', queueDigit, {once: true});

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
    button.addEventListener('click', displayOperatorContents);
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
    operator = e.currentTarget.value;
};

function triggerCalculate(e){
    dotBtn.addEventListener('click', queueDigit, {once: true});
    dotBtn.addEventListener('click', displayButtonContents, {once: true});

    if(secondOperand != ''){
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
    btnValue = e.currentTarget.value;
    console.log(`btn_val: ${btnValue}`);

    if(displayContents == 0){
        displayContents = btnValue;
        operandQueue = btnValue;
    } else {
        displayContents += btnValue;
        console.log(`displayContents = ${displayContents} ReTest = ${operatorRe.test(displayContents)}`);
    }
    displayCurrent.textContent = displayContents;
};

function displayOperatorContents(e){
    btnValue = e.currentTarget.value;
    console.log(`operator_btn_value: ${btnValue}`);

    if(displayContents == 0){
        displayContents = 0 + btnValue;
    } else if(operatorRe.test(displayContents)){
        displayContents = firstOperand + operator;
    } else {
        displayContents += btnValue;
        console.log(`displayContents = ${displayContents} ReTest = ${operatorRe.test(displayContents)}`);
    }
    displayCurrent.textContent = displayContents;
};

// calculation functions only calculates
function calculate(){
    if (operator == '+'){
        result = (Number(firstOperand) + Number(secondOperand)).toFixed(2);
    } else if (operator == '-'){
        result = (Number(firstOperand) - Number(secondOperand)).toFixed(2);
    } else if (operator == '*'){
        result = (Number(firstOperand) * Number(secondOperand)).toFixed(2);
    } else if (operator == '/'){
        result = (Number(firstOperand) / Number(secondOperand)).toFixed(2);
    };
};

//clear All
function clearAll(){
    displayContents = '0';
    displayCurrent.textContent = '0';
    displayPrevious.textContent = '';
    firstOperand = '0';
    secondOperand = '';
    operandQueue = '';
    operator = '';
};