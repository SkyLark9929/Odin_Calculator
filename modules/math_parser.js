let expression = '6-4'

function splitOnPlus(expression){ // takes a string, cause if its called, its called first
    let output;
    if(expression.includes('+')){
        output = expression.split('+');
    } else {
        output = [expression];
    };
    return output; //this array consists of strings previously divided by + or just contains a string, if no plusses were in
};

function splitArrayOnMinus(member){
    let output;
    if (member.includes('-')){
        output = member.split('-');
    } else {
        output = member;
    }

    return output;
};

function splitArrayOnMultiply(member){
    let output;
    // if member is an object we map a split for * on it, if it is not an object, we bypass
    if(typeof member == 'object'){
        output = member.map((x) => {
            if (x.includes('*')){
                return x.split('*');
            } else {
                return x;
            }
        })
    } else {
        output = member;
    }
    return output;
};

function multiplyParts(member){
    let output
    let initialValue = 1;
    if (typeof member == 'object'){
        output = member.map((x) => {
            if (typeof x == 'object'){
                return x.reduce((accumulator, currentValue) => accumulator * Number(currentValue), initialValue);
            } else {
                return x;
            }
        })
    } else {
        output = member;
    }
    
    return output;
}

function subtractParts(member){
    let output;
    if (typeof member == 'object'){
        output = member.reduce((accumulator, currentValue) => accumulator-currentValue);
    } else {
        output = member;
    }
    
    return output;
}

function sumParts(parts){
    let initialValue = 0;
    return parts.reduce((accumulator, currentPart) => accumulator + Number(currentPart), initialValue)
}

function calculate(expression){
    let temp_array = splitOnPlus(expression);
    temp_array = temp_array.map(splitArrayOnMinus);
    temp_array = temp_array.map(splitArrayOnMultiply);
    temp_array = temp_array.map(multiplyParts);
    temp_array = temp_array.map(subtractParts);
    let sum = sumParts(temp_array)
    return sum;
};

console.log(calculate(expression))
