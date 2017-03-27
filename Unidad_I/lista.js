/*¿Cómo pedimos datos al usuario?*/
/*var nombre = prompt("Dime tu nombre", "Escribe tu nombre");
document.write("Hola",nombre);*/

/*Operaciones con números*/
/*var n1 = prompt("Dime un número");
var n2 = prompt("Dime otro número");
document.write("La suma de "+ n1 + " + "+ n2 + " es: ");
document.write(parseInt(n1)+parseInt(n2));*/

/*crear array*/
//var fruits = ["Manzana", "Plátano"];
//
//console.log(fruits.length);

/*Acceder (en índice) a un elemento de un Array*/
//var first = fruits[0];
//Manzana
//
//var last = fruits[fruits.length - 1];
////Plátano
//
//console.log(first, last);
//
///*Bucle sobre un Array*/
//fruits.forEach(function (item, index, array) {
//    if(item == "Plátano" )
//        console.log("Encontramos al "+ item);
//    console.log(item, index);
//});
////Manzana 0 Plátano 1
//
///*Añadir al final de un Array*/
//var newLength = fruits.push("Naranja");
//// ["Manzana", "Plátano", "Naranja"];
//fruits.forEach(function (item, index, array) {
//    console.log(item, index);
//});
//
///*Eliminar elemento del final de un Array*/
//var last = fruits.pop(); // elimina Naranja (del final)
//// ["Manzana", "Plátano"];
//console.log("Elemento eliminado", last);
//
///*Eliminar elemento del inicio de un Array*/
//var first = fruits.shift(); // elimina Manzana del inicio
//// ["Plátano"];
//console.log("Elemento eliminado", first);
//fruits.forEach(function (item, index, array) {
//    console.log(item, index);
//});
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array*/
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/unshift*/
/*https://es.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs*/
//var lista = [ [1, 6, 8],
//  [0, 4, 6, 9],
//  [4, 6],
//  [4, 5, 8],
//  [1, 2, 3, 5, 9],
//  [3, 4],
//  [0, 1, 2],
//  [8, 9],
//  [0, 3, 7],
//  [1, 4, 7] ];
//
//lista.forEach(function (item, index, array) {
//    console.log(index, item);         
//    });
//

//
//var listaADY = [ [1, 2],
//               [0, 2, 3, 5],
//               [0, 1, 3, 4],
//               [1, 2, 4],
//               [2, 3, 5],
//               [1, 4, 6],
//               [5] ];
//listaADY.forEach(function (item, index, array) {
//    console.log(index, item, array);
//    
//});
//
var n = prompt("Dame el tamaño del grafo", "introduce un digito");
document.write(parseInt(n));
var listaADY = new Array(parseInt(n)); 
for(var i = 0; i < n; i++){
    var tama = prompt("Dame el tamaño de la lista "+i);
    listaADY[i] = new Array(parseInt(tama)); // define cada elemento como una matriz de longitud tama
    
    for(var j = 0; j <= n; j++) {
        var col = prompt("Dame los vertices incidentes en",i,j);
        listaADY[i][j] =  parseInt(col);
    }
}
console.log(listaADY.length);