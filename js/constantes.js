export const PI = Math.PI;

export let usuario = "Elian";

const password = "qwerty";
//export default password;
//Una Funcion expresada es aquella que se guarda en una variable
const helJonlo = () => console.log("Hola");

export default function saludar() {
  console.log("Hola Módulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}