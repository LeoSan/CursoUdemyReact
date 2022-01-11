// Iteradores en JS
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// forEach - Acceder a cada elemento del array
const arrayForeach = tecnologias.forEach( function (tech) {
    return tech
})

// Crear un nuevo array
const arrayMap = tecnologias.map( function (tech) {
    return tech
})

//Diferencia entre forEach y map puedes retornar un nuevo arreglo el forEach NO

console.log(arrayForeach)
console.log(arrayMap)