//1
//Escribir un programa que solicite la edad y
//si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// let edad = parseInt(prompt("Ingrese su edad"))
// if (edad >= 18) {
//     document.write("Puedes conducir")
// }else if (edad < 18) {
//     document.write("no puedes conducir")
//     
// }else{
//     document.write("Ingrese un numero valido")
// }


//2
//Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

//0-2: Muy deficiente
//3-4: Insuficiente
//5-6: Suficiente
//7: Bien
//8-9: Notable
//10: Sobresaliente
//
//Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. 
//Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”

// let nota = parseInt(prompt("Ingrese su nota"))
// if (nota < 0 || nota > 10 ){
//     console.log("ingrese un numero valido");
// }else if (nota < 3) {
//     console.log("Muy Def")
// }else if (nota < 5) {
//     console.log("INSU")
// }else if (nota < 7) {
//     console.log("Suficiente")
//     
// }else if (nota == 7) {
//     console.log("Bien")
// }else if (nota < 10) {
//     console.log("Notable")
// }else if (nota == 10) {
//     console.log("Sobresaliente")
// }


// 3
// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// let resultado = ""
// do {
//     let cadena = prompt("Introduce una cadena");
//     if (resultado == "") {
//     resultado = resultado + cadena;
//     }
//     else {
//     resultado = resultado + "-" + cadena;
//     }
// } while (confirm("Desea seguir?"));
// document.write(resultado);

//4
// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert»
// y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
// let suma = 0;
// do{
//     let numero = parseInt(prompt("Ingrese un numero"));
//     if (Number(numero) == numero) {
//         numero = Number(numero);
//         suma = suma + numero;
//     }else{
//         if (numero != undefined ) {
//             alert("introdusca un numero valido")
//         }
//         
//     }
// } while (confirm("Desea Seguir?")) {
//     
// }console.log("el resultado de las suma de todo es " + suma);


//5
//Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

//El algoritmo para calcular la letra del dni es el siguiente :
//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
//(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
//Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//Deberá de repetirse el proceso hasta que el usuario pulse «cancelar

/* let dni = parseInt(prompt("ingrese su dni"))
let resto = 0

if (dni < 0 || dni > 99999999) {
    alert("ingrese un numero valido");
}else{
    resto = dni % 23
    if (resto == 0) {
        console.log("T");
    }else if (resto == 1) {
        console.log("R");
    }else if (resto == 2) {
        console.log("W");
    }else if (resto == 3) {
        console.log("A");
    }else if (resto == 4) {
        console.log("G");
    }else if (resto == 5) {
        console.log("M");
    }else if (resto == 6) {
        console.log("Y");
    }else if (resto == 7) {
        console.log("F");
    }else if (resto == 8) {
        console.log("P");
    }else if (resto == 9) {
        console.log("D");
    }else if (resto == 10) {
        console.log("X");
    }else if (resto == 11) {
        console.log("B");
    }else if (resto == 12) {
        console.log("N");
    }else if (resto == 13) {
        console.log("J");
    }else if (resto == 14) {
        console.log("Z");
    }else if (resto == 15) {
        console.log("S");
    }else if (resto == 16) {
        console.log("Q");
    }else if (resto == 17) {
        console.log("V");
    }else if (resto == 18) {
        console.log("H");
    }else if (resto == 19) {
        console.log("L");
    }else if (resto == 20) {
        console.log("C");
    }else if (resto == 21) {
        console.log("K");
    }else if (resto == 22) {
        console.log("E");
    }
}
*/

//6
//Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666

// for (let i = 1; i < 31; i++) {
//     console.log(String(i).repeat(i));
// }



//7

/*Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50) 
de la siguiente forma : (suponiendo que indica 30) */


//numero = (numero>50) ? 50 : numero
        //if(numero <= 50){
            //}else{
           // console.log("Error");
        //}
// let numero = parseInt(prompt("Ingrese un numero"))
//         
//     numero = (numero>50) ? 50 : numero
// for (let index = numero; index > 0 ; index--) {
//     console.log(index.toString().repeat(index));
//     
// }




//8
//Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)
// 1
// 12
// 123
// 1234
// 12345
// 123456



//    let numero = parseInt(prompt("ingrese un numero"))
//    if (numero > 0 && numero <= 50) {
//        let rep,i;
//        for (let i = 0; i <= numero; i++) {
//            
//            for (let rep = 1; rep <= i; rep++) {
//                document.write(rep);
//                
//            }
//            document.write("<br>");
//        }
//    }else{
//        alert("ingrese un numero valido")
//    }



//9
// Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y 
// que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-

//let i = 0
//let o = 500
//for (let i = 0; i <= o; i++) {
//    console.log(i);
//    if (i % 4 == 0 ) {
//        console.log("Es divisible en 4");
//    }if (i % 9 == 0) {
//        console.log("Es divisible en 9");
//    }if (i % 5 == 0) {
//        console.log("------------------------");
//        
//    }
//}

//10
// Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número
// consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.







//11
//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// let edad1 = parseInt (prompt("ingrese su nombre y su edad"))
// let edad2 = parseInt (prompt("ingrese su nombre y su edad"))
// let edad3 = parseInt (prompt("ingrese su nombre y su edad"))
// 
// if (edad1 > edad2 && edad1 > edad3) {
//     console.log(edad1 + " es el mayor");
// }else if (edad2 > edad1 && edad2 > edad3) {
//     console.log(edad2 + " es el mayor");
// }else{
//     console.log(edad3 + " es el mayor");
// }
// 



//12
//Realiza un script que genere un número aleatorio entre 1 y 99

// let i = 0
// i = Math.floor(Math.random() * 90)
// console.log(i);




//13
//Realiza un script que pida un texto y lo muestre en mayúsculas

// let min = prompt("ingrese un Texto en minusculas");
// console.log(min.toUpperCase());
// let may = prompt("ingrese un Texto en mayusculas")
// console.log(min.toLowerCase());



//14
// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// let texto = prompt("Introduce un texto:");
// let num = texto.length;    
// let caracter;
// let i;
// for (i = 0; i < num; i++) {
//     caracter = texto.charAt(i);    
//     if (i == num - 1) {
//         document.write(caracter);
//     }
//     else {
//         document.write(caracter + "-");
//     }
// }


//15
//Realiza un script que cuente el número de vocales que tiene un texto.

// let texto = prompt("Introduce un texto:");
// let longstring = texto.length;
// texto = texto.toUpperCase();  
// let vocal;
// let contador = 0;
// let i;
// for (i = 0; i < longstring; i++) {
//     vocal = texto.charAt(i);    
//     if ((vocal == "A") || (vocal == "E") || (vocal == "I") || (vocal == "O") || (vocal == "U")) {
//         contador++;
//     }
// }
// document.write("Numero de Vocales: " + contador);

//16 
// Realiza un script que pida una cadena de texto y la devuelva al revés. 
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// let texto = prompt("Introduce un Texto:");
// let num = texto.length;
// let i;
// let k;
// let salida = "";
// for (i = 0; i < num; i++) {
//     k = texto.charAt(i);   
//     salida = k + salida;
// }
// document.write(salida);

//17
//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado

// let vocales = ["a", "e", "i", "o", "u"];
// let texto = prompt("Introduce un texto");
// let textmin = texto.toLowerCase();
// let posicion = 0;
// let parar = false;
// 
// for (let i = 0; i < textmin.length; i++) {
//     for (let j = 0; j < vocales.length; j++) {
//         if (vocales[j] == textmin.charAt(i)) {
//             posicion = i;
//             parar = true;
//             break;
//         }
//     }
// 
//     if (parar) {
//         break;
//     }
// }
// document.write("La primera vocal está en la posición " + posicion);