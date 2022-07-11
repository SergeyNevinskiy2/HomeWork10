'use strict';

const numOrStr = prompt('input number or string');

switch (true){

case numOrStr === null:
    console.log('Вы отменили');
    break;
    
case numOrStr.trim() === '' :
    console.log ('Пустая строка');
    break;

case isNaN (+numOrStr):
    console.log('number is Ba_NaN (NaN)');
    break;

default: 
console.log('Ok');

}
