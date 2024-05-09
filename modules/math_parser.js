let expression = '11-6*2+4'
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
    let multipliedStrings;

    if (stringWithoutPlus.includes('*')){
        multipliedStrings = stringsWithoutMinus.map(parseMultiplyExpression);
    } else {
        multipliedStrings = stringsWithoutMinus;
    };

    let subtractedString = multipliedStrings.reduce((accumulator, currentValue) => accumulator-currentValue);

    return subtractedString;
};

function parseMultiplyExpression(stringsWithoutMinus){
    let stringWithoutAsterisk = stringsWithoutMinus.split('*');

    let multiplicationResult = stringWithoutAsterisk.reduce((accumulator, currentValue) => accumulator*currentValue);

    return multiplicationResult;
};
