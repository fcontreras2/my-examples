// 1.- Dado el sgte codigo, realizar la invocacion del metodo 'speak' del obj cat, 
// para imprimir en consola el valor de la propiedad 'sound' del obj 'dog'.


var talk = talky;

var cat = {
  speak: talk,
  sound: 'miau'
}

var dog = {
  speak: cat.speak,
  sound: 'wof'
}

function talky() {
  console.log(this.sound);
}

// respuesta
cat.speak = talk.bind(dog)
cat.speak()

// 2.- Dado el sgte array, retornar en un array solo los NOMBRES de las personas que donan órganos 
// y que tienen 1 o más esposas, cuyo nombre de la esposa empieze con 'Y' o 'N'.

[
  {
    name: 'Pepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte']
  },
  {
    name: 'Juan',
    donacion: false,
    esposas: ['Yahaira']
  },
  {
    name: 'Lalo',
    donacion: true,
    esposas: []
  }
]

//.filter(e => {
  //let flag = e.esposas.filter(a => a.charAt(0) === 'Y' || a.charAt(0) === 'N')
  //return flag.length > 0 && e.donacion;
//}).map(e => e.name)

// respuesta

