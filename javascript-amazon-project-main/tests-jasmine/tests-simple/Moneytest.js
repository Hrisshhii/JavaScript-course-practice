import {formatCurrency} from '../../Scripts/utils/money.js';

console.log('Converts cents to dollars');
if(formatCurrency(2095)==='20.95'){
    console.log('Passes');
}else{
    console.log('failed');
}

/*
EDGE CASE
*/
console.log('For 0');
if(formatCurrency(0)==='0.00'){
    console.log('Passes');
}else{
    console.log('failed');
}

console.log('Rounds up to the nearest cents');
if(formatCurrency(2000.5)==='20.01'){
    console.log('Passes');
}else{
    console.log('failed');
}