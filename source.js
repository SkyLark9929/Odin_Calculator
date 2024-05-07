let displayContents = '';
let operator = '';
let firstOperand;
let firstOperandAndOperator;
let secondOperand;
let result;

let displayCurrent = document.querySelector('#display_current');
let displayPrevious = document.querySelector('#display_previous');
let equalsBtn = document.querySelector('#equals');


// adding event listeners to all buttons
digitButtons = document.querySelectorAll('.digit');
for (button of digitButtons){
    button.addEventListener('click', displayButtonContents);
};

// adding event listeners to equals button
equalsBtn.addEventListener('click', getSecondOperand);
equalsBtn.addEventListener('click', displayButtonContents);
equalsBtn.addEventListener('click', displayEquals);
equalsBtn.addEventListener('click', calculate);

// adding event listeners to operators
operatorBtns = document.querySelectorAll('.operator');
for (button of operatorBtns){
    button.addEventListener('click', getFirstOperand);
    button.addEventListener('click', getOperator);
    button.addEventListener('click', displayButtonContents);
};

// operator functions
function getFirstOperand(){
    firstOperand = displayCurrent.textContent;
    console.log(`First operand ${firstOperand}`);
}

function getSecondOperand(e){
    firstOperandAndOperator = firstOperand + operator;
    console.log(`Current text content: ${displayCurrent.textContent}`);
    secondOperand = displayCurrent.textContent.replace(firstOperandAndOperator, '');
    console.log(`Second operand: ${secondOperand}`);
}

function getOperator(e){
    operator = e.target.value;
};

// display functions
function displayButtonContents(e){
    displayContents += e.currentTarget.value;
    displayCurrent.textContent = displayContents;
};

function displayEquals(){
    displayPrevious.textContent = displayContents;
    displayContents = '';
    displayCurrent.textContent = '';
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

    console.log(`Result: ${result}`)
};