const nums = [2, 8, 4, 7, 12, 87];
console.log(nums);


const numsEven = nums.filter((num, index) => num % 2 === 0);
console.log(numsEven);

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]