const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'

let studentToFind = 'Marco Lanci'
//ricorda che ilparametro della funzione è un nome assegnato da noi, potevamo scrivere pure nonnt
const findClass = students.find((student) => {
  if (student.name === studentToFind) {
    return studentToFind
  }
})

//quando fai il consolelog di una funzione, e vuoi cercare un dato del risultato della funzione, non inserire il risultato.dato, 
// ma siccome la funzione stessa già ti fornisce un risultato con il return
// fai funzione.dato
console.log (findClass.class)


// Risultato: '3C'