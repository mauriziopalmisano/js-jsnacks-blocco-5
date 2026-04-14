const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

const names = people.map((person, index) => person.name)
let listaNomi = '';
names.forEach((name, index) =>{
    listaNomi += `'${name}', `;
} )
console.log(listaNomi.trim());


// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'