let n = 7;
let piramida = '';
for(i=1; i<=n; i++){
    piramida += ' '.repeat(n-i) + '*'.repeat(i) + ' ' + '*'.repeat(i) + ' '.repeat(n-i) + '\n';   
}
console.log(piramida);

