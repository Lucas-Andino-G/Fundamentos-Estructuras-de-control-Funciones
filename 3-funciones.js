// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    function despedir(){
        console.log('Adios');
    }
    // Tu código aquí


// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    function multiplicarPorDos (numero){
        return numero * 2;
    }
// Tu código aquí

// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    function esMayorDeEdad(edad){
        //Si la edad es mayor a 18
        if (edad > 18){
            //Se retorna verdadero
            return true;
        //Caso contrario se retorna falso
        } else {
            return false;
        }
    }
// Tu código aquí

// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
    function multiplicar(a, b){
        return a * b;
    }
// Tu código aquí

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    function saludarPersonalizado(nombre, apellido){
        return 'Hola ' + nombre + ' ' + apellido;
    }
// Tu código aquí

// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    function calcularPotencia (base, exponente){
        return base ** exponente;
    }
    // Tu código aquí

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
    function restar(a, b){
        return a - b;
    }
    // Tu código aquí

// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    function dividir(a, b){
        return a / b;
    }
// Tu código aquí

// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `multiplicarDOS`.
    const multiplicarDOS = function(a, b){
        return a * b;
    }
    // Tu código aquí

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
    const saludar = function(nombre){
        return 'Hola ' + nombre;
    }
    // Tu código aquí

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    const esPar = function (numero){
        //Si el modulo del numero es igual a 0
        if (numero % 2 === 0){
            //Se retorna verdadero
            return true;
        //Caso contrario se retorna falso
        } else {
            return false;
        }
    }
// Tu código aquí

// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    const multiplicarFlecha = (a, b) => a * b;
    // Tu código aquí

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
    const saludarFlecha = (nombre) => 'Hola ' + nombre
// Tu código aquí

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = radio => 3.14 * (radio ** 2)
// Tu código aquí

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    //Si el numero es igual a 1
    if (n === 1){
        //retornamos 1
        return 1;
    //Caso contrario usamos la formula n + suma = n - 1
    } else {
        return n + suma(n - 1);
    }
    // Tu código aquí
}

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n){
    //Si el numero es menor o igual a 1
    if (n <= 1){
        //Retornamos el mismo numero
        return n;
    //Caso contrario se retorna la siguiente operacion
    } else {
        return fibonacci (n - 1) + fibonacci(n - 2);
    }
}
    // Tu código aquí


// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    //Si el numero es igual a 1
    if (n === 1){
        //Se retorna 1
        return 1;
    //Sino se realiza la siguiente operacion
    } else {
        return n * factorial(n - 1)
    }
    // Tu código aquí
}

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    //Si el exponente de un numero es 0
    if (exponente === 0){
        //Se retorna 1
        return 1;
    //Caso contrario se retorna la operacion siguiente
    } else {
        return base * potencia (base, exponente - 1);
    }
    // Tu código aquí
}

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};
