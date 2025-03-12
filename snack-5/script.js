const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

const even = nums.filter((number) => {
    if(number % 2 === 0) {
        return number
    } 
})

console.log(even)

// Risultato: [2, 8, 4, 12]