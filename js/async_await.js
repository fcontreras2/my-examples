/**
	Async es una nueva manera de escribir funciones asyncronas
	Esto evita la creacion de una promesa (New Promise).

	Await - Obliga al Js a esperar a que se ejecute la promesa
	- solo puede ser colocado dentro de una llamada async
*/

const myAsync = async () => {

  const esperar = new Promise((resolve, reject) => {
  	setTimeout(() => resolve(Math.floor((Math.random() * 10) + 1)), 1500);
  })

  	console.log('ANTES AWAIT')
  	let number = await esperar;
	  console.log('DESPUEST AWAIT')
  	try {
      if (number % 2 === 0)
      	return Promise.resolve('Ok - PAR');
 	  else
        return Promise.reject('ERROR - INPAR');
    } catch (error) {
    	throw error;
    }
}

myAsync().then(resolve => console.log(resolve)).catch(error => console.log(error))
