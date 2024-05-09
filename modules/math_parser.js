let expression = '1+1+22+323+44'

function sumParts(parts){
    let initialValue = 0;
    return parts.reduce((accumulator, currentPart) => accumulator + Number(currentPart), initialValue)
}

function splitOnPlus(expression){
    let partsSum = expression.split('+');

    return partsSum;
};

