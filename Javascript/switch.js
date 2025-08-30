let aa = 2, bb = 2;
let operatorCalc = 'Divfide';
let lastValue;
switch(operatorCalc)
{
    case 'Add':
        lastValue = aa+bb;
        break;
    case 'Subtract':
        lastValue = aa-bb;
        break;
    case 'Multiply':
        lastValue = aa*bb;
        break;
    case 'Divide':
        lastValue = aa/bb;
        break;
    default:
        console.log("Invalid input");      
}
console.log(lastValue);