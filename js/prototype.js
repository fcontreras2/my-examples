/**
  Los prototipos son estructuras de datos que definen un comportamiento
  ejemplo Array y Object, estos prototipos son por defecto de Js. Los cuales
  tienen sus metodos y funciones prestablecidas por JS.

  ej:
    const a = [1, 2];

    console.log(a.length()) // Consulta la cantidad de elementos de 'a'

    - La funcion 'length' pertenece al prototipo de Array en JS.
    - Si haces console.log de una variable podremos observar en el navegador
      el __proto__ (prototipo) de la variable.
**/

/**
  ES6 nos proporciona una sintaxis similar a otros lenguajes para el manejo de
  clases. Proporciona keywords como class, extends y super.
**/
class Person {
  	constructor(name, lastName, age) {
      this.name = name;
      this.age = age;
  	  this.lastName = lastName;
    }

    getFullName() {
      return this.name + ' ' + this.lastName;
    }
}

class Student extends Person {
	constructor(name, lastName, age, curso) {
    super(name, lastName, age);
    this.curso = curso;
  }
}

const pedro = new Student('Pedro','Vazques', 65, 5);
const ramon = new Student('Ramon','Petit', 51, 10);
pedro.description = 'Persona de buen comportamiento en las instalaciones'; // Se puede agregar dinamicamente un atributo
console.log(pedro, ramon);
console.log(pedro.getFullName())
