let expression = '1*2*3+1*3'

function sumParts(parts){
    let initialValue = 0;
    return parts.reduce((accumulator, currentPart) => accumulator + Number(currentPart), initialValue)
}

function splitOnPlus(expression){
    let partsSum = expression.split('+');
    return partsSum; //this array consists of strings previously divided by +
};

function multiplyParts(parts){
    let initialValue = 1;
    let result;
    let multipliedParts = [];
    for(part of parts){
        part = part.split('*');
        result = part.reduce((accumulator, currentPart) => accumulator * currentPart, initialValue);
        multipliedParts.push(result);
    };
    return multipliedParts
}

let plusSplitExpr = splitOnPlus(expression);
console.log(`Slit on plus: ${plusSplitExpr}`);

let multipliedParts = multiplyParts(plusSplitExpr);
console.log(`Multiplied parts: ${multipliedParts}`);

let sum = sumParts(multipliedParts);
console.log(`Sum: ${sum}`);