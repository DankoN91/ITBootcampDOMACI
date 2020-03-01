let saldo = document.querySelector('#inc-out');
let nazivTransakcije = document.querySelector('#text');
let iznosTransakcije = document.querySelector('#number');
let ispisNaListu = document.querySelector('#confirm');
let sumPrihodi = 0;
let sumRashodi = 0;

let listaPrihodaD =[];
let listaRashodaD =[];

function osvezavanjeCrtanja(){
  let listaPrihoda = document.querySelector('#prihodi');
  let listaRashoda = document.querySelector('#rashodi');

  listaPrihoda.innerHTML="";
  listaRashoda.innerHTML="";

  //Crtanje prihoda
  for (let ind = 0; ind < listaPrihodaD.length; ind++) {
    const element = listaPrihodaD[ind];
    
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`${element.naziv} (+ ${element.vrednost})`));
    listaPrihoda.appendChild(li);
  }

  //Crtanje rashoda
  for (let ind = 0; ind < listaRashodaD.length; ind++) {
    const element = listaRashodaD[ind];
    
    //Izracunavanje procenta u odnosu na sumu prihoda
    let procenat= ((element.vrednost*100)/sumPrihodi).toFixed(2);
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`${element.naziv} (- ${element.vrednost}) [${procenat}%]`));
    listaRashoda.appendChild(li);
  }


}

function ubaciRashod(rashod,vrednost){
  let rashodObj={'naziv':rashod, 'vrednost':vrednost};
  listaRashodaD.push(rashodObj);
  osvezavanjeCrtanja();
}

function ubaciPrihod(prihod,vrednost){
  let prihodObj={'naziv':prihod, 'vrednost':vrednost};
  listaPrihodaD.push(prihodObj);
  osvezavanjeCrtanja();
}

ispisNaListu.addEventListener('click',()=>{

  //validacija
  if(iznosTransakcije.value.trim()=='' || nazivTransakcije.value.trim()==''){
    alert('Prazan unos nije dozvoljen');
    return;
  }

  let obavljenaTransakcija = parseInt(iznosTransakcije.value);
  
  if(obavljenaTransakcija<=0){
    alert('Negativni brojevi i nula nisu dozvoljeni');
    return;
  }

  if(saldo.value=='prihodi'){
    sumPrihodi += obavljenaTransakcija;  
    ubaciPrihod(nazivTransakcije.value,obavljenaTransakcija);
  }else{
    sumRashodi += obavljenaTransakcija;
    ubaciRashod(nazivTransakcije.value,obavljenaTransakcija);
  }

  //Osvezavanje suma prihoda i rashoda
  let income = document.querySelector('#income');
  income.textContent = '';
  income.textContent = `Приходи: + ${sumPrihodi}`;

  let outcome = document.querySelector('#outcome');
  outcome.textContent = '';
  outcome.textContent = `Расходи: - ${sumRashodi}`;

  let ukupanSaldo = document.querySelector('#saldo');
  ukupanSaldo.textContent = '';
  ukupanSaldo.textContent = (sumPrihodi - sumRashodi).toFixed(2);
  
});




  
//   let dltBtn = document.createElement('input');
//   dltBtn.type = 'button';
//   dltBtn.value = 'X';
//   dltBtn.className = 'delete';
//   dltBtn.addEventListener('click',(e)=>{
//     if(e.target.className == 'delete'){
//       forDelete = e.target.parentElement;
//       forDelete.parentElement.removeChild(forDelete);
//     }

