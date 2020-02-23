// ZADATAK 1

let p1={
    ime: 'Carmander',
    vrsta: 'vatreni',
    sposobnosti: 'bljuje vatru',
    karakteristike: {napad: 53, 
                     odbrana: 45, 
                     brzina: 30},
    slika: 'charmander.png'
    }

let p2={
    ime: 'Skvirtl',
    vrsta: 'vodeni',
    sposobnosti: 'baca talas',
    karakteristike: {napad: 50, 
                     odbrana: 45, 
                     brzina: 25},
    slika: 'squirtle.png'
    }

let p3={    
    ime: 'Pikacu',
    vrsta: 'elektricni',
    sposobnosti: 'strujni udar',
    karakteristike: {napad: 60, 
                     odbrana: 40, 
                     brzina: 60},
    slika: 'pikachu.png'
    }

let p4={    
    ime: 'Bulbasaur',
    vrsta: 'travnati',
    sposobnosti: 'otrovni brsljan',
    karakteristike: {napad: 59, 
                     odbrana: 70, 
                     brzina: 15},
    slika: 'bulbasaur.png'                
    }


let pokemoni = [p1,p2,p3,p4];


// ZADATAK 2

function sposobnosti(niz){
    let noviNiz = [];
    niz.forEach(element => {
    noviNiz.push(element.sposobnosti);    
});
    return noviNiz;
    // console.log(noviNiz);
}

// sposobnosti(pokemoni);


// ZADATAK 3

// pokemoni.sort((a,b)=>{
//     return a.karakteristike.brzina - b.karakteristike.brzina;
// })

// ZADATAK 4

function jacina(niz){
    
    niz.sort((a,b)=>{
        return a.karakteristike.napad - b.karakteristike.napad;
    })
    return((niz[niz.length-1]));
    // console.log(res)
}

// jacina(pokemoni);

// ZADATAK 5

let allPokemon = document.querySelector('#get-all');
allPokemon.addEventListener('click', presentAll);

let container = document.querySelector('#container');

function presentAll(){
    
    pokemoni.forEach(element => {
        let svakiPokemon = document.createElement('p');
        svakiPokemon.innerText = `Ime: ${element.ime}\nVrsta: ${element.vrsta}\n Sposobnosti: ${element.sposobnosti}\nKarakteristike: napad: ${element.karakteristike.napad}, odbrana: ${element.karakteristike.odbrana}, brzina: ${element.karakteristike.brzina}`;
        let sveSlike = document.createElement('img');
        sveSlike.src = element.slika;
        sveSlike.style.height = sveSlike.style.width = '250px';
        container.appendChild(sveSlike);
        container.appendChild(svakiPokemon);
        })
}


let strPokemon = document.querySelector('#get-strongest');
strPokemon.addEventListener('click', presentStrongest);

function presentStrongest(){
    let pokemon = jacina(pokemoni);
    let najjaciPokemon = document.createElement('p');
    let najjaciSlika = document.createElement('img');
    najjaciPokemon.innerText = `Ime: ${pokemon.ime}\nVrsta: ${pokemon.vrsta}\n Sposobnosti: ${pokemon.sposobnosti}\nKarakteristike: napad: ${pokemon.karakteristike.napad}, odbrana: ${pokemon.karakteristike.odbrana}, brzina: ${pokemon.karakteristike.brzina}`;
    najjaciSlika.src = pokemon.slika;
    najjaciSlika.style.height = najjaciSlika.style.width = '250px';
    container.appendChild(najjaciSlika);
    container.appendChild(najjaciPokemon);
}

