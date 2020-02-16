function picaDozivotno(godine,picaMesecno){
    let picaDoStote = 12*picaMesecno*(100-godine);
        return `Do kraja zivota, pojescete ${picaDoStote} pica.` 
}

console.log(picaDozivotno(30,5));