function deljivoSaPet(arr){
    let niz = [];
    for(let broj of arr){
        if(broj % 5 == 0){ 
            niz.push(broj);
        }
    }
    return `Brojevi iz niza deljivi sa 5 su: ${niz.toString()}.`;
}

console.log(deljivoSaPet([1,5,10,15,17,25,92]));




