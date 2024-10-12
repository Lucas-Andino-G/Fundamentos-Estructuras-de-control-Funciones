// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    //Para saber si un numero es par comparo el modulo del numero con 0
    if (numero % 2 === 0){
        console.log('El número es par');
    //En el caso de no ser par se imprime un mensaje que es par
    } else {
        console.log('El número es impar')
    }// Tu código aquí
}

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    //Uso una condicional: si la edad es menor a 18 entonces imprimo 'es menor de edad'
    if (edad < 18){
        console.log('Menor de edad');
    //Sino, uso una condicional y comparo si la edad es mayor o igual a 18 y si la edad es menor o igual a 65. Imprimo 'Adulto'
    } else if (edad >= 18 && edad <= 65){
        console.log('Adulto');
    //Sino se cumplen las condiciones anteriores imprimo significa que es mayor a 65. Imprimo'Adulto Mayor'
    } else {
        console.log('Adulto Mayor')
    }// Tu código aquí
}

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    //Uso el bucle: 'mientras' el numero sea mayor a 0 entonces se imprime el numero y se resta 1
    while (numero > 0){
        console.log(numero);
        numero--
    }
    // Tu código aquí
}

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    //Creo la variable respuesta
    let i = 0
    do{
        //Este elementro se va a sumar cada vez que sea menor a 5
        i++
        console.log('Estoy aprendiendo JavaScript');
    } while(i < 5)
    // Tu código aquí
}

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    //En el bucle for si el numero es mayor o igual a uno restamos 1 al numero
    for (numero >= 0; numero--;){
        //Comparamos si el moduo de numero es igual a 0 (es par) e imprimimos el valor del numero
        if (numero % 2 === 0){
            console.log(numero)
        }
    }
    // Tu código aquí
}

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    //Defino i, comparo si i es menor o igual a diez y sumo 1 a la i
    for (i = 1; i <= 10; i++){
        //Si i llega a 0 se rompe el bucle
        if (i === 6){
            break;
        }
    }
    // Tu código aquí
}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    //Se define i comenzando desde 1, se compara para saber si es menor o igual a 10 y se suma 1 a la cuenta
    for (i = 1; i <= 10; i++){
        //Cuando i llega a 5 continuamos al siguiente numero
        if (i === 5){
            continue;
        }
    }
    // Tu código aquí
}

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    //Asignamos un valor a cada dia de la semana
    switch (dia) {
        //Para el caso 1 el dia sera 'Lunes'
        case 1:
            //Retorno un texto con el nombre del mismo dia
            return 'Lunes';
        //Para el caso 2 el sera 'Martes'
        case 2:
            //Retorno un texto con el nombre del mismo dia
            return 'Martes';
        case 3:
            return 'Miercoles';
        case 4:
            return 'Jueves';
        case 5:
            return 'Vienes';
        case 6:
            return 'Sabado';
        case 7:
            return 'Domingo';
        //En caso de que no se cumpla ninguno de los anteriores casos
        default:
            //Restornamos el siguiente texto
            return 'Ingrese un numero del 1 al 7';
        }
    // Tu código aquí
}


// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    //Asignamos todas las vocales para cada caso verdadero
    switch(letra){
        //Para el caso a, e, i, o, u, retornamos true
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        //Si no se cumple ningun caso anterior retornamos false
        default:
            return false;
    }
    // Tu código aquí
}


// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    //Si a, b y c son mayores a 0
    if (a > 0 && b > 0 && c > 0){
        //Se retorna el siguiente texto
        return 'Todos son positivos';
    //Si la condicion anterior no se cumple verificamos si a, b y c son menores a 0
    } else if (a < 0 && b < 0 && c < 0){
        //Se retorna el siguiente texto
        return 'Todos son negativos';
    //En caso de que no se cumpla las anteriores condiciones, se imprime el siguiente texto
    } else {
        return 'Almenos uno es negativo';
    }
    // Tu código aquí
}

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
