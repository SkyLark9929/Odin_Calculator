import { parseMath } from "./modules/simple-math-parser.js";

const digitOperatorRe = RegExp('(\\d+(\\.\\d*)*[+*\/-])');
const digitOperatorDigitRe = RegExp('(\\d+(\\.\\d*)*[+*\/-]\\d+)');
const decimalRe = RegExp('\\.\\d*$');
const mousedown = new MouseEvent('mousedown');
const keyArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', 'Enter', '=', 'Backspace'];
const keyDictionary = {
    'Enter':'#equals',
    '=':'#equals',
    '+':'#plus',
    '-':'#minus',
    '*':'#multiply',
    '/':'#divide',
    '.':'#dot',
    '1':'#one',
    '2':'#two',
    '3':'#three',
    '4':'#four',
    '5':'#five',
    '6':'#six',
    '7':'#seven',
    '8':'#eight',
    '9':'#nine',
    '0':'#zero',
    'Backspace':'#backspace',
    'ClearAll':'#clear'
};

let sevenBtn = document.querySelector('#\\7');
let displayCurrent = document.querySelector('#display_current');
let displayPrevious = document.querySelector('#display_previous');
let equalsBtn = document.querySelector('#equals');
let clearBtn = document.querySelector('#clear');
let dotBtn = document.querySelector('#dot');
let backspaceBtn = document.querySelector('#backspace');
let body = document.querySelector('body');
let controlState = false;

// listener for keyboard support
body.addEventListener('keydown', activateControl);
body.addEventListener('keyup', deactivateControl);
body.addEventListener('keydown', inputFromKeyboard);

// listeners for digits
let digits = document.querySelectorAll('.digit');
for (const digit of digits){
    digit.addEventListener('mousedown', displayDigit);
};

// listeners for operators
let operators = document.querySelectorAll('.operator');
for (const operator of operators){
    operator.addEventListener('mousedown', displayOperator);
};

// listeners for equals
equalsBtn.addEventListener('mousedown', displayResult);

// listeners for clear
clearBtn.addEventListener('mousedown', clearAll);

// listeners for backspace
backspaceBtn.addEventListener('mousedown', deleteCharacter);

// listeners for dot
dotBtn.addEventListener('mousedown', displayDot);

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
};

function deleteCharacter(){
    const expression = displayCurrent.textContent;
    displayCurrent.textContent = expression.slice(0, -1);
};

// keyboard support functions

function inputFromKeyboard(e){
    let key = String(e.key);
    console.log(e.key)
    if (keyArray.includes(key)){
        if(controlState && key == 'Backspace'){
            key = 'ClearAll'
        };
        const id = keyDictionary[key];
        document.querySelector(id).dispatchEvent(mousedown);
    };
};

function activateControl(e){
    const key = String(e.key);
    if (key == 'Control'){
        controlState = true
    };
};

function deactivateControl(e){
    const key =String(e.key);
    if (key == 'Control'){
        controlState = false;
    }
}