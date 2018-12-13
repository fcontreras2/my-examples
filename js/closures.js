/**
 Permite declarar funciones dentro de una funcion (anidamiento de funciones)
 - Las variables del padre puede accedidas desde el hijo
 - Si el hijo modifica las variables declaradas en el padre, estas tambien se modifican en el padre
**/

const helloWord = (name) => { // Funcion padre

 const printText = (text) => { // Funcion hijo
   console.log('1' + text);
   name = 'Freddy'
 }

 printText(name)
 console.log('2' + name)
}

helloWord('Pepe');
