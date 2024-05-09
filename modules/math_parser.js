let expression = '1+2+3'

function sumParts(parts){
    let initialValue = 0;
    return parts.reduce((accumulator, currentPart) => accumulator + Number(currentPart), initialValue)
}

function splitOnPlus(expression){ // takes a string, cause if its called, its called first
    let output;
    if(expression.includes('+')){
        output = expression.split('+');
    } else {
        output = [expression];
    };
    return output; //this array consists of strings previously divided by + or just contains a string, if no plusses were in
};

function splitStringOnMultiply(expression){ //takes a string
    let partsMultiply = expression.split('*');
    return partsMultiply;
};

function splitArrayOnMultiply(member){
    let output;
    if (member.includes('*')){
        output = member.split('*');
    } else {
        output = member;
    }

    return output;
};

function multiplyParts(member){
    let output
    let initialValue = 1;
    if (typeof member == 'object'){
        output = member.reduce((accumulator, currentValue) => accumulator * Number(currentValue), initialValue);
    } else {
        output = member;
    }
    
    return output;
}

function calculate(expression){
    let dividedByPlusArray = splitOnPlus(expression);
    let dividedByPlusAndAsteriskArray = dividedByPlusArray.map(splitArrayOnMultiply);
    let multipliedArray = dividedByPlusAndAsteriskArray.map(multiplyParts);
    let sum = sumParts(multipliedArray)
    return sum;
};

console.log(calculate(expression))
