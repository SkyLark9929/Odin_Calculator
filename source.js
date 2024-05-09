import { parseMath } from "./modules/simple-math-parser.js";

const digitOperatorRe = RegExp('(\\d+(\\.\\d*)*[+*\/-])');
const digitOperatorDigitRe = RegExp('(\\d+(\\.\\d*)*[+*\/-]\\d+)');
const decimalRe = RegExp('\\.\\d*$');

let displayCurrent = document.querySelector('#display_current');
let displayPrevious = document.querySelector('#display_previous');
let equalsBtn = document.querySelector('#equals');
let clearBtn = document.querySelector('#clear');
let dotBtn = document.querySelector('#dot');

// listeners for digits
let digits = document.querySelectorAll('.digit');
for (const digit of digits){
    digit.addEventListener('click', displayDigit);
};

// listeners for operators
let operators = document.querySelectorAll('.operator');
for (const operator of operators){
    operator.addEventListener('click', displayOperator);
};

// listeners for equals
equalsBtn.addEventListener('click', displayResult);

//listeners for clear
clearBtn.addEventListener('click', clearAll);

//listeners for dot
dotBtn.addEventListener('click', displayDot);

// display functions
function displayDigit(e){
    displayCurrent.textContent += e.currentTarget.value; 
};

function displayOperator(e){
    let displayContents = displayCurrent.textContent;
    if(digitOperatorDigitRe.test(displayContents)){
        displayResult(e);
    } else if(digitOperatorRe.test(displayContents)){
        displayCurrent.textContent = displayContents.slice(0, -1) + e.currentTarget.value
    } else {
        displayCurrent.textContent += e.currentTarget.value;
    };
};

function displayDot(e){
    let displayContents = displayCurrent.textContent;

    if (decimalRe.test(displayContents) == false){
        displayDigit(e);
    };
};

function displayResult(e){
    let expression = displayCurrent.textContent;
    let result = parseMath(expression);
    displayPrevious.textContent = expression + '=';
    if (e.currentTarget.value == '='){
        displayCurrent.textContent = result;
    } else {
        displayCurrent.textContent = result + e.currentTarget.value;
    }
};

function clearAll(){
    displayCurrent.textContent = '';
    displayPrevious.textContent = '';
}
