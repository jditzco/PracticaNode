// mostrar un mensaje por consola
console.log("hola mundo");
///////// mostrar los valores de un array en la consola, (lo hacemos con una función tradicional, y con una función flecha)
let arr1=[4,1,2,7,5];
let arr2=["hola", "como va", "hola", "chao", "hola"];
function numbs (){
    return console.log(...arr1);
}
numbs();
const names = () => {
    return console.log(...arr2);
}
names();
///////// agregar un valor a un array y mostrar (el array) por consola (funciones flecha)
const agregar = (a) =>{
    arr1.push(a);
    return console.log(...arr1);
}
agregar(6);
//////devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo
const ultimo = () => console.log(arr2[arr2.length-1]);
ultimo();
//////// mostrar por consola la sumatoria de todos los valores de un array de valores numericos
const suma =() => {
    let retornar = 0;
    arr1.array.forEach(element => {
        retornar += element;
    });
    return retornar;
}
console.log(suma());
//inviertir el orden de los elementos de un array
const inviertir = () =>{
    let invertido = [];
    for (let i = arr2.length-1; i >= 0; i--) {
        invertido.push(arr2);
    }
    return invertido;
}
console.log(...invertir());
/////////// devolver los valores del array ordenados

