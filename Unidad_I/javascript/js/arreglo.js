
//
// var arreglo = new Array();
//
// arreglo.push(1);
// arreglo.push('Hola Mundo!');
//
// arreglo[1] = 'Arista';//sobreescribe "Hola Mundo!"
// arreglo[2] = 2;
//
// console.log(arreglo[0]+ " -> " + arreglo[1] + " <- " + arreglo[2]);
// console.log(arreglo.length);
//
// var arreglo = [1, 2, 3];
// console.log(arreglo.length);
//
// var arreglo = [1, 'Hola', 'Mundo'];
//
// console.log("Longitud del arreglo"+" "+ arreglo.length+" Dice: ");
// for (var i = 0; i < arreglo.length; i++) {
//   console.log(arreglo[i]);
// }

// //arreglos bidimensionales
// var arreglo = [[1, 2, 3], ['a','b', 'c']];
//
// for(i = 0; i < arreglo[0].length; i++){
//     console.log(arreglo[0][i]);
// }

var arreglo = [[1, 2, 3], ['a', 'b', 'c']];
var cadena = arreglo[1].join('');//une el arreglo a, b, c en una cadena abc
console.log(cadena);

var cadena2 = 'abc';
var arreglo2 = cadena.split('');//convierte la cadena abc, en un arreglo [a, b, c]

console.log(arreglo2);
