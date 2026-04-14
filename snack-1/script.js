const names = ['Edoardo', 'Simone', 'Francesco'];
let listaNomi = '';
names.forEach((name, index) =>{
    listaNomi += `'${name}', `;
} );
console.log(listaNomi.trim());
// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'