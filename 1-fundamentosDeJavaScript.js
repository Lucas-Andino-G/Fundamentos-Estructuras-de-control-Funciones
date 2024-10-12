// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    console.log(10 >= 9)// Tu código aquí...
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    console.log(0 === 0)// Tu código aquí...
}

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    console.log(7 > 8 && 7 < 10)// Tu código aquí...
}

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    //Primero defino las variables con sus respectivos valores
    let producto = 1500
    let descuento = 0.25
    let presupuesto = 1150
    let total = undefined
    //Luego calculo el descuento
    total = producto * descuento
    //Por ultimo verifico si el monto es suficiente para comprar el producto e imprimo el mensaje
    if (presupuesto > total){
        console.log("Puedes comprar el producto");
    } else {
        console.log("No puedes comprar el producto")
    }// Tu código aquí...
}

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    //Defino una varaible mensaje con el string Hola JavaScript
    let mensaje = "Hola JavaScript"
    //Imprimo el mensaje llamando a la variable
    console.log(mensaje)// Tu código aquí...
}

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    //Defino la variable resultado agregando una suma de dos numeros
    let resultado = 3 + 2
    //Imprimo el resultado llamando a la variable
    console.log(resultado)// Tu código aquí...
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    //Defino una constante con el valor verdadero o true
    const IS_DISABLED = true
    //Imprimo llamando a la constante
    console.log(IS_DISABLED)// Tu código aquí...
}

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    //Aqui defino la variable con una capacidad nula null
    let capacidad = null
    //Llamo a la variable para imprimir en la consola
    console.log(capacidad)// Tu código aquí...
}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    //Creo la variable indefinida llamada dinero
    let dinero = undefined
    //Imprimo la variable dinero
    console.log(dinero)// Tu código aquí...
}

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    //Llamo a la variable como userName
    let userName = ''
    //Imprimo el tipo de dato
    console.log(typeof userName)// Tu código aquí...
}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    //Creo una variable dogId y le agrego una cadena de texto
    let dogId = "" + ""
    //Primero verifico si la variable es tipo 'string'
    console.log(typeof dogId === "string")
    //Imprimo el tipo de dato de la variable
    console.log(typeof dogId)// Tu código aquí...
}

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    console.log("Mensaje")// Tu código aquí...
}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30
    console.log(edad)// Tu código aquí...
}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    //Creo una variable 'mensaje' y 'version' y le agrego sus respectivos valores
    let mensaje = 'La version de JavaScrip es: '
    let version = 2024
    //Imprimo el resultado llamando a las variables
    console.log(mensaje + version)// Tu código aquí...
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};

//compareTenAndNine()
//compareZeroAndZero()
//compareSeven()
//canBuyProduct()
//createMessageVariable()
//createSumVariable()
//createDisabledConstant()
//createNullVariable()
//createUndefinedVariable()
//checkUserNameType()
//checkDogIdIsString()
//logMessage()
//logAge()
//logVersion()
