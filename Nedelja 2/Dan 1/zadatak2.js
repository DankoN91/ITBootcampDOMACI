// Prodavnica

let cena = 100;
let budzet = 60;
if(budzet < 0 || cena < 0){
    console.log('Neispravan unos!');
}
    else if(budzet >= cena){
        console.log(`Uspesno ste kupili proizvod. Trenutno stanje vaseg budzeta iznosi ${budzet - cena} dinara.`);
    }
else{
    console.log(`Nemate dovoljno novca. Trenutno stanje vaseg budzeta iznosi ${budzet} dinara.`);
}