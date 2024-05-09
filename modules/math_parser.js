let expression = '1*2*3+1*3+1'

function sumParts(parts){
    let initialValue = 0;
    return parts.reduce((accumulator, currentPart) => accumulator + Number(currentPart), initialValue)
}

function splitOnPlus(expression){ // takes a string, cause if its called, its called first
    let partsSum = expression.split('+');
    return partsSum; //this array consists of strings previously divided by +
};

function splitStringOnMultiply(expression){ //takes a string
    let partsMultiply = expression.split('*');
    return partsMultiply;
};

function splitArrayOnMultiply(array){
    let multipliersGroup;
    let output = [];
    for(member of array){
        multipliersGroup = member.split('*')
        output.push(multipliersGroup);
    }

    return output;
};

function multiplyParts(arrayOfArraysAndDigits){
    let result;
    let output = [];
    let initialValue = 1;
    for(member of arrayOfArraysAndDigits){
        if(typeof member == 'object'){ // check whether the member is a group, or it should be bypassed
            result = member.reduce((accumulator, currentElement) => accumulator * Number(currentElement), initialValue);
            output.push(result);
        } else {
            output.push(multipliersGroup);
        }
    };
    
    return output;
}

function calculate(expression){
    if(expression.includes('+') && expression.includes('*')){
        let dividedByPlusArray = splitOnPlus(expression);
        let dividedByPlusAndAsteriskArray =  splitArrayOnMultiply(dividedByPlusArray);
        let multipliedArray = multiplyParts(dividedByPlusAndAsteriskArray);
        let sum = sumParts(multipliedArray)

        return sum;
    }
};

console.log(calculate(expression))
