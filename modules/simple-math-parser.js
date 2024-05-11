export function parseMath(string){
    let array = [];
    let checker;
    let result;
    // check for the minus on the first position

    if(string.charAt(0) == '-'){
        checker = string.slice(1);
    } else {
        checker = string;
    };

    if(checker.includes('+')){
        array = string.split('+');
        result = array.reduce((accumulator, currentValue) => Number(accumulator)+Number(currentValue));
    } else if(checker.includes('-')){
        array = string.split('-');
        result = array.reduce((accumulator, currentValue) => Number(accumulator)-Number(currentValue));
    } else if(checker.includes('*')){
        array = string.split('*');
        result = array.reduce((accumulator, currentValue) => Number(accumulator)*Number(currentValue));
    } else if(checker.includes('/')){
        array = string.split('/');
        result = array.reduce((accumulator, currentValue) => Number(accumulator)/Number(currentValue));
    } else {
        result = string;
    };

    return result;
};