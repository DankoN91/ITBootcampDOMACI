n = 7;
piramida = '';
for(i=1; i<=n; i++){
    piramida += ' '.repeat(n-i) + '*'.repeat(i) + '\n';
}
console.log(piramida);