export function parseMath(string){
    let array = [];
    let result;
    
    if(string.includes('+')){
        array = string.split('+');
        result = array.reduce((accumulator, currentValue) => accumulator+currentValue);
    };

    if(string.includes('-')){
        array = string.split('-');
        result = array.reduce((accumulator, currentValue) => accumulator-currentValue);
    };

    if(string.includes('*')){
        array = string.split('*');
        result = array.reduce((accumulator, currentValue) => accumulator*currentValue);
    };

    if(string.includes('/')){
        array = string.split('/');
        result = array.reduce((accumulator, currentValue) => accumulator/currentValue);
    };

    return result;
};