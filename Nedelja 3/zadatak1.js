function maksOdTri(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return `Broj ${num1} je najveci broj.`;
    }else if(num2 > num1 && num2 > num3){
        return `Broj ${num2} je najveci broj.`;
    }else if(num3 > num1 && num3 > num1){
        return `Broj ${num3} je najveci broj.`;
    }else{
        return 'Brojevi moraju biti razliciti.';
    }
}





