export default class Paciente {
    constructor(nombre, edad, diagnostico) {
      this.nombre = nombre;
      this.edad = edad;
      this.diagnostico = diagnostico;
    }
  
    resumen() {
      return `${this.nombre}, ${this.edad} años - Diagnóstico: ${this.diagnostico}`;
    }
  }
  