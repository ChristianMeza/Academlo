let students = [ { name: 'Georg', age: 23, }, { name: 'Andrea', age: 23, }, { name: 'Daniela', age: 25, }, { name: 'José', age: 27, } ];

console.log(findRepeatedAge(students))
console.log(findRepeatedAge(students))

function findRepeatedAge(students) {
    let arrayAge = []
    let arrayContador = []
    let validaRegistro = 0
    let ageMasRepetido = 0
    let contadorMayor = 0
    students.forEach(function (element) {
        arrayAge.forEach(function (item,index) {
            if(item == element.age) {
                validaRegistro = item
                arrayContador[index]++
            }
        })
        if(validaRegistro != element.age){
            arrayAge.push(element.age)
            arrayContador.push(1)
        }
    })
    arrayContador.forEach(function (element,indice) {
        if(element > contadorMayor){
            contadorMayor = element
            ageMasRepetido = arrayAge[indice]
        }
    })
    return ageMasRepetido
}
