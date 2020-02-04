let a = 30;
let b = 6;
let znak = 'deljenje1';
switch(znak){
    case 'zbir':
        console.log(a + b);
        break;
    case 'razlika1':
        console.log(a - b);
        break;
    case 'razlika2':
        console.log(b - a);
        break;
    case 'proizvod':
        console.log(a * b);
        break;
    case 'deljenje1':
        console.log(a / b);
        break;
    case 'deljenje2':
        console.log(b / a);
        break;
    case 'ostatak1':
        console.log(a % b);
        break;
    case 'ostatak2':
        console.log(b % a);
        break;
    case 'stepen1':
        console.log(a ** b);
        break;
    case 'stepen2':
        console.log(b ** b);
        break;
    default:
        console.log('Nedozvoljena operacija');
        
    

    
}