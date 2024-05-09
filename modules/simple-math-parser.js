export function parseMath(string){
    let array = [];
    let result;
    
    if(string.includes('+')){
        array = string.split('+');
        result = array.reduce((accumulator, currentValue) => Number(accumulator)+Number(currentValue));
    } else if(string.includes('-')){
        array = string.split('-');
        result = array.reduce((accumulator, currentValue) => Number(accumulator)-Number(currentValue));
    } else if(string.includes('*')){
        array = string.split('*');
        result = array.reduce((accumulator, currentValue) => Number(accumulator)*Number(currentValue));
    } else if(string.includes('/')){
        array = string.split('/');
        result = array.reduce((accumulator, currentValue) => Number(accumulator)/Number(currentValue));
    } else {
        result = string;
    }

    return result;
};