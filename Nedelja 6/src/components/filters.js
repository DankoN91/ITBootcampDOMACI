import { getPastLaunches } from "../../services/spacex_service";




const Filter = () => {
    let divZaSelekt = document.createElement('div');
    let select = document.createElement('select');
    
    for(let i=2006;i<=2020;i++){
        let opcija = document.createElement('option');
        opcija.value = i;
        opcija.textContent = i;
        select.appendChild(opcija);
    }
    select.addEventListener('change', ()=>{
        getPastLaunches().then(data => {
            data = data.data.filter(element => element.launch_year == select.value);
            console.log(data)
            
            data.forEach(element => {
                console.log(element)
            });
           
            let launchList = document.querySelector('.launch-list');
            launchList.innerHTML = '';

            
            
        })
    })
    divZaSelekt.appendChild(select);



    return divZaSelekt
}

export default Filter;