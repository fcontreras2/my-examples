// Simulacion de una respuesta asincrona, luego de 2 seg
const myPromise = new Promise((resolve, reject) => {
  let number = Math.floor((Math.random() * 10) + 1);

  setTimeout(() => {
  	if (number % 2 === 0)
    	resolve('Ok - PAR');
  	else
    	reject('ERROR - INPAR')
  },2000)
})


myPromise.then(resolve => console.log(resolve)).catch(error => console.log(error))
