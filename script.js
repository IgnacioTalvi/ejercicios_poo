// Ejercicio 1
// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    console.log(
      `Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`
    );
  }
}

let miPersona = new Persona("Ignacio", 26, "masculino");
miPersona.obtDetalles();

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
  constructor(nombre, edad, genero, propiedadesCurso, grupo) {
    super(nombre, edad, genero);
    this.propiedadesCurso = propiedadesCurso;
    this.grupo = grupo;
  }

  registrar() {
    console.log(
      `PropiedadesCurso: ${this.propiedadesCurso}, Grupo: ${this.grupo}`
    );
  }
}

let estudiante = new Estudiante("Santiago", 26, "Hombre", "3A", "3A");
estudiante.registrar();

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }

  asignar() {
    console.log(`Asignatura: ${this.asignatura}, Nivel: ${this.nivel}`);
  }
}

let profesor = new Profesor("Carolina", 45, "Femenino", "Historia", "Avanzado");
profesor.asignar();
profesor.obtDetalles();
console.log(profesor);

// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.

// Ejercicio 2

class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }
  attack() {
    return this.power;
  }
  defend(damage) {
    console.log(this.life - damage);
  }
}

let vidaRestante = new Warrior(100, 50);
vidaRestante.defend(70);

class Maya {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }
  drinkColaCao() {
    console.log(this.power + 10);
  }
}

class Azteca {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }
  drinkNesquick() {
    return this.power + 10;
  }
}

let aztecaBebeNesquick = new Azteca(100, 80);
console.log(aztecaBebeNesquick.drinkNesquick());

let mayaBebeColaCao = new Maya(80, 50);
console.log(mayaBebeColaCao.drinkColaCao());

let nuevoMaya = new Warrior(90, 30);
let nuevoAzteca = new Warrior(50, 40);

console.log(nuevoMaya.attack(nuevoAzteca));
console.log(nuevoAzteca.attack(nuevoMaya));
