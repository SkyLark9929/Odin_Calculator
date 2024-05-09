let expression = '11-6*2+4';
console.log(parseExpression(expression));

function parseExpression(expression){
    let stringsWithoutPlus;
    if (expression.includes('+')){
        stringsWithoutPlus = expression.split('+');
    } else {
        stringsWithoutPlus = [expression];
    };

    let parsedString;
    if (expression.includes('-')){
        parsedString = stringsWithoutPlus.map(parseMinusExpression);
    } else if (expression.includes('*')){
        parsedString = stringsWithoutPlus.map(parseMultiplyExpression);
    } else {
        parsedString = stringsWithoutPlus;
    };

    return parsedString.reduce((accumulator, currentValue) => Number(accumulator)+Number(currentValue));    
};

function parseMinusExpression(stringWithoutPlus){
    stringsWithoutMinus = stringWithoutPlus.split('-')
    let dividedStrings;

    if (stringWithoutPlus.includes('/')){
        dividedStrings = stringsWithoutMinus.map(parseMultiplyExpression);
    } else {
        dividedStrings = stringsWithoutMinus;
    };

    let subtractedString = multipliedStrings.reduce((accumulator, currentValue) => accumulator-currentValue);

    return subtractedString;
};

function parseDivisionExpression(stringsWithoutMinus){

}

function parseMultiplyExpression(stringWithoutDivision){
    let stringWithoutAsterisk = stringWithoutDivision.split('*');

    let multiplicationResult = stringWithoutAsterisk.reduce((accumulator, currentValue) => accumulator*currentValue);

    return multiplicationResult;
};
