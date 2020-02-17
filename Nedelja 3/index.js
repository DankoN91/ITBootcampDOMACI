let pCount1 = document.querySelector('#count1');
let counter = 0;

let btnOrder1 = document.querySelector('#order1');

btnOrder1.addEventListener('click',() => {
    counter++;
    pCount1.innerHTML = counter;
})

let btnOrder2 = document.querySelector('#order2');
btnOrder2.addEventListener('click',() => {
    counter++;
    pCount1.innerHTML = counter;
})

function resetAndOrder(){
    if(counter===0){
        alert('Nepravilan unos');
        return;
    }

    let pomCount=counter;
    counter=0;
    pCount1.innerHTML=counter;
    let date= new Date();
    let hours=date.getHours()+":"+date.getMinutes();
    date=date.toISOString().slice(0,10);
    alert('Narucili ste '+pomCount+' pica, '+date+' '+hours);
}

let orderNow1 = document.querySelector('#orderNow1');
let orderNow2 = document.querySelector('#orderNow2');

orderNow1.addEventListener('click',resetAndOrder)
orderNow2.addEventListener('click',resetAndOrder)




