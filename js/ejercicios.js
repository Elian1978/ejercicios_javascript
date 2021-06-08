/* 1) Programa una función que cuente el número de caracteres de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá 10.*/

//Función declarada
function numeroCaracteres1(cadena = "") {
    try {
      if (!cadena) {
        throw new Error("No ingresaste una cadena");
      } else if (isNaN(cadena)) {
        return cadena.length;
      } else {
        throw new Error("Ingresaste un número");
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const numeroCaracteres2 = (cadena = undefined) => {
    try {
      if (!cadena) {
        throw new Error("No ingresaste una cadena");
      } else if (isNaN(cadena)) {
        return cadena.length;
      } else {
        throw new Error("Ingresaste un numero");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del vídeo
  const numeroCaracteres3 = (cadena = "") =>
    !cadena
      ? console.warn("No ingresaste una cadena")
      : console.info(`la  palabra ${cadena} tiene  ${cadena.length} caracteres`);
  
  //-------------------------------------------------------------------------------------------------------
  
  /* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
  pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/
  
  //Función declarada
  function devolverTextoRecortado1(cadena = "", longitud = undefined) {
    try {
      if (isNaN(longitud) || longitud === "") {
        throw new Error(`${longitud} no es un numero`);
      } else if (longitud === undefined) {
        throw new Error("No esta definido el numero");
      } else if (isNaN(cadena)) {
        return cadena.slice(0, longitud);
      } else {
        throw new Error(`${cadena} es un numero`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const devolverTextoRecortado2 = (cadena, numero) => {
    try {
      if (isNaN(numero) || numero === "") {
        throw new Error(`${numero} no es un numero`);
      } else if (numero === undefined) {
        throw new Error("No esta definido el numero");
      } else if (isNaN(cadena)) {
        return cadena.slice(0, numero);
      } else {
        throw new Error(`${cadena} es un numero`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del vídeo
  const devolverTextoRecortado3 = (cadena = "", longitud = undefined) =>
    !cadena
      ? console.warn("No ingresaste una cadena")
      : longitud === undefined
      ? console.error("No ingresaste la longitud a cortar")
      : console.info(cadena.slice(0, longitud));
  
  //-------------------------------------------------------------------------------------------------------
  
  /* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
  pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
  
  //Función declarada
  function separarCadenas1(cadena, caracter) {
    try {
      if (isNaN(cadena) === false) {
        throw new Error(`${cadena} no es una cadena`);
      } else if (cadena === undefined) {
        throw new Error("La cadena no esta definida");
      } else if (caracter === undefined) {
        throw new Error("el caracter no esta definido");
      } else {
        return cadena.split(caracter);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const separarCadenas2 = (cadena, caracter) => {
    try {
      if (isNaN(cadena) === false) {
        throw new Error(`${cadena} no es una cadena`);
      } else if (cadena === undefined) {
        throw new Error("La cadena no esta definida");
      } else if (caracter === undefined) {
        throw new Error("el caracter no esta definido");
      } else {
        return cadena.split(caracter);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del vídeo
  const separarCadenas3 = (cadena = "", separador = undefined) =>
    !cadena
      ? console.warn("No ingresaste una cadena")
      : separador === undefined
      ? console.warn("no ingresaste el caracter separador")
      : cadena.split(separador);
  
  /* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
  devolverá Hola Mundo Hola Mundo Hola Mundo.*/
  
  //-------------------------------------------------------------------------------------------------------
  
  //Función declarada
  function repetirTexto1(cadena, numero) {
    try {
      if (isNaN(cadena) === false) {
        throw new Error(`${cadena} es un número`);
      } else if (isNaN(numero) || numero === "") {
        throw new Error("no esta ingresando un número");
      } else {
        let texto = "";
        for (let i = 0; i < numero; i++) {
          texto += `${cadena} `;
        }
        return texto;
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const repetirTexto2 = (cadena, numero) => {
    try {
      if (isNaN(cadena) === false) {
        throw new Error(`${cadena} es un número`);
      } else if (isNaN(numero) || numero === "") {
        throw new Error("no esta ingresando un número");
      } else {
        let texto = "";
        for (let i = 0; i < numero; i++) {
          texto += `${cadena} `;
        }
        return texto;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del vídeo
  const repetirTexto3 = (texto = "", veces = undefined) => {
    if (!texto) {
      return console.warn("No ingresaste un texto");
    }
    if (veces === undefined) {
      return console.warn("No ingresaste el número de veces a repetir el texto");
    }
    if (veces === 0) {
      return console.error("El número de veces no puede ser 0");
    }
    if (Math.sign(veces) === -1) {
      return console.error("El número de vcees no puede ser negativo");
    }
  
    for (let i = 1; 1 <= veces; i++) {
      console.info(`${texto}, ${i}`);
    }
  };

  /*5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

//Función declarada
function invertirCadena1(cadena = undefined) {
    try {
      if (!cadena) {
        throw new Error(" No ingreso una cadena");
      } else {
        let inv = "";
        for (let i = cadena.length - 1; i >= 0; i--) {
          inv += cadena[i];
        }
        return inv;
      }
    } catch (error) {
      return console.error(error);
    }
  }
  
  //Arrow function
  const invertirCadena2 = (cadena = "") => {
    try {
      if (!cadena) {
        throw new Error(" No ingreso una cadena");
      } else {
        let inv = "";
        for (let i = cadena.length - 1; i >= 0; i--) {
          inv += cadena[i];
        }
        return inv;
      }
    } catch (error) {
      return console.error(error);
    }
  };
  
  //Solución video
  const invertirCadena3 = (cadena = "") => {
    !cadena
      ? console.warn("No ingresaste una cadena")
      : console.info(cadena.split("").reverse().join(" "));
  };
  
  //--------------------------------------------------------------------------------------------------------------------------------
  
  /*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
  pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
  
  //Función declarada
  function contarRepeticion1(cadena, palabra) {
    try {
      if (!cadena || !palabra) {
        throw new Error("No ingresaste la cadena");
      } else if (!isNaN(palabra)) {
        throw new Error("Ingresaste un numero, recuerda que es una cadena");
      } else {
        let contador = 0;
        let palabras = cadena.split(" ");
        for (let i = 0; i < cadena.length; i++) {
          if (palabras[i] === palabra) {
            contador++;
          }
        }
        return contador;
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const contarRepeticion2 = (cadena = "", palabra = "") => {
    try {
      if (!cadena || !palabra) {
        throw new Error("No ingresaste la cadena");
      } else if (!isNaN(palabra)) {
        throw new Error("Ingresaste un numero, recuerda que es una cadena");
      } else {
        let contador = 0;
        let palabras = cadena.split(" ");
        for (let i = 0; i < cadena.length; i++) {
          if (palabras[i] === palabra) {
            contador++;
          }
        }
        return contador;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const contarRepeticion3 = (cadena = "", texto) => {
    if (!cadena) return console.warn("No ingresaste el texto largo");
    if (!texto) return console.warn("No ingresaste la palabra a evaluar");
    let i = 0,
      contador = 0;
    while (i !== -1) {
      i = cadena.indexOf(texto, i);
      if (i !== -1) {
        i++;
        contador++;
      }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);
  };
  
  //--------------------------------------------------------------------------------------------------------------------------------
  
  /*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), 
  pe. mifuncion("Salas") devolverá true.*/
  
  //Función declarada
  function esPalindromo1(cadena = "") {
    try {
      if (!cadena) {
        throw new Error("No ingreso la una cadena");
      }
      palabra = palabra.toLowerCase();
      let inv = cadena.length - 1;
      let aux = 0;
      let bool;
      for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === cadena[inv]) {
          aux++;
        }
        inv--;
      }
      aux === cadena.length ? (bool = true) : (bool = false);
      return bool;
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const esPalindromo2 = (cadena = "") => {
    try {
      if (!cadena) {
        throw new Error("No ingreso la una cadena");
      }
      palabra = palabra.toLowerCase();
      let inv = cadena.length - 1;
      let aux = 0;
      let bool;
      for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === cadena[inv]) {
          aux++;
        }
        inv--;
      }
      aux === cadena.length ? (bool = true) : (bool = false);
      return bool;
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const esPalindromo3 = (palabra = "") => {
    if (!palabra) return console.warn("No ingresaste una palabra o frase");
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");
  
    return palabra === alReves
      ? console.info(
          `Sí es palíndromo, Palabra original ${palabra}, palabra al revés ${alReves}`
        )
      : console.info(
          `No es palíndromo, Palabra original ${palabra}, palabra al revés ${alReves}`
        );
  };
  
  //--------------------------------------------------------------------------------------------------------------------------------
  
  /*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
  pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/
  
  //Función declarada
  function eliminarPatron1(cadena = "", patron = "") {
    try {
      if (!cadena || !isNaN(cadena)) {
        throw new Error("No ingreso una cadena");
      }
      let regExp = new RegExp(patron, "gi");
      let res = cadena.replace(regExp, "");
      return res;
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const eliminarPatron2 = (cadena = "", patron = "") => {
    try {
      if (!cadena || !isNaN(cadena)) {
        throw new Error("No ingreso una cadena");
      }
      let regExp = new RegExp(patron, "gi");
      let res = cadena.replace(regExp, "");
      return res;
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const eliminarPatron3 = (texto = "", patron = "") => {
    !texto
      ? console.warn("No ingresaste un texto")
      : !patron
      ? console.warn("No ingresaste un patrón de caracteres")
      : console.info(texto.replace(new RegExp(patron, "ig"), ""));
  };

  /*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

//Función declarada
function numeroAleatorio1() {
    return parseInt(Math.random() * (600 - 501) + parseInt(501));
  }
  
  //Arrow function
  const numeroAleatorio2 = () => {
    return parseInt(Math.random() * (600 - 501) + parseInt(501));
  };
  
  //Solución de video
  const numeroAleatorio3 = () =>
    console.info(Math.ceil(Math.random() * 100 + 500));
  //-------------------------------------------------------------------------------------------------------------------------------
  
  /* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
   pe. miFuncion(2002) devolverá true. */
  
  //Función declarada
  function esCapicua1(numero) {
    try {
      if (!numero) {
        throw new Error("No ingresaste un número");
      }
      let inver = numero.toString().split("").reverse().join("");
      if (numero.toString() === inver) return true;
      else return false;
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const esCapicua2 = (numero = undefined) => {
    try {
      if (!numero) {
        throw new Error("No ingresaste un número");
      }
      let inver = numero.toString().split("").reverse().join("");
      if (numero.toString() === inver) return true;
      else return false;
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const esCapicua3 = (numero = 0) => {
    if (!numero) return console.warn("No ingresaste un numero");
    if (typeof numero !== "number")
      return console.error("No ingresaste un numero");
  
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");
    return numero === alReves
      ? console.info(
          `Sí es capícua, Número original ${numero}, Número al revés ${alReves}`
        )
      : console.info(
          `No es capícua, Número original ${numero}, Número al revés ${alReves}`
        );
  };
  
  //-------------------------------------------------------------------------------------------------------------------------------
  
  /* 11) Programa una función que calcule el factorial de un número 
   (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), 
   pe. miFuncion(5) devolverá 120. */
  
  //Función declarada
  function factorial(numero = undefined) {
    try {
      if (numero === undefined) throw new Error("No ingresaste un numero");
      if (numero === 0) return 1;
      if (numero < 0) throw new Error("No hay factoriales de numero negativos");
      let factorial = 1;
      for (let i = numero; i > 0; i--) {
        factorial *= i;
      }
      return factorial;
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const factorial2 = (numero = undefined) => {
    try {
      if (numero === undefined) throw new Error("No ingresaste un numero");
      if (numero === 0) return 1;
      if (numero < 0) throw new Error("No hay factoriales de numero negativos");
      let factorial = 1;
      for (let i = numero; i > 0; i--) {
        factorial *= i;
      }
      return factorial;
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const factorial3 = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un numero");
    if (typeof numero !== numero)
      return console.error(`el valor ${numero} no es un número`);
    if (numero === 0) return console.error("El numero no puede ser cero");
    if (Math.sign(numero) === -1)
      return console.error("No hay factoriales de numeros negativos");
    let factorial = 1;
    for (let i = numero; i > 0; i--) {
      factorial *= factorial;
    }
    return console.info(`El factorial de ${numero} es ${factorial}`);
  };
  

  /*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
o no, pe. miFuncion(7) devolverá true.*/
//Función declarada
function esPrimo1(numero = undefined) {
    try {
      if (numero === 0) throw new Error("Cero no es un numero primo");
      if (typeof numero !== "number")
        throw new Error(`${numero} no es un numero`);
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return true;
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const esPrimo2 = (numero = undefined) => {
    try {
      if (numero === 0) throw new Error("Cero no es un numero primo");
      if (typeof numero !== "number")
        throw new Error(`${numero} no es un numero`);
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return true;
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const esPrimo3 = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un numero");
    if (typeof numero !== "number")
      return console.error(`el valor ${numero} no es un número`);
    if (numero === 0) return console.error("El numero no puede ser cero");
    if (numero === 1) return console.error("El numero no puede ser 1");
    if (Math.sign(numero) === -1)
      return console.error("El numero no puede ser negativo");
  
    let divisible = false;
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        divisible = true;
        break;
      }
    }
    return divisible
      ? `${numero} no es un número primo`
      : `${numero} es un número primo`;
  };
  
  //------------------------------------------------------------------------------------------------------------
  
  /*13) Programa una función que determine si un número es par o impar, 
  pe. miFuncion(29) devolverá Impar.*/
  
  //Función declarada
  function esPar1(numero = undefined) {
    try {
      if (numero === undefined) throw new Error("No ingresaste un número");
      if (typeof numero) throw new Error(`el valor ${numero} no es un número`);
      if (numero % 2 === 0) {
        return `${numero} es par`;
      } else {
        return `${numero} no es par`;
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const esPar2 = (numero = undefined) => {
    try {
      if (numero === undefined) throw new Error("No ingresaste un número");
      if (typeof numero) throw new Error(`el valor ${numero} no es un número`);
      if (numero % 2 === 0) {
        return `${numero} es par`;
      } else {
        return `${numero} no es par`;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const esPar3 = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");
    if (typeof numero !== "number")
      return console.error(`El valor ${numero} ingresado, no es un número`);
  
    return numero % 2 === 0
      ? console.info(`El número ${numero} es Par`)
      : console.info(`El número ${numero} es impar`);
  };
  
  //------------------------------------------------------------------------------------------------------------
  
  /*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
  pe. miFuncion(0,"C") devolverá 32°F.*/
  
  //Función declarada
  function conversionCF1(valor = undefined, unidad = "") {
    try {
      if (valor === undefined) throw new Error("No ingresaste un valor");
      if (typeof unidad !== "string")
        throw new Error("No ingresaste una caracter");
      if (unidad === undefined)
        throw new Error("No ingresaste una unidad valida");
      let conversion;
      if (unidad === "C") {
        conversion = valor * 1.8 + 32;
        return `${conversion}°F`;
      }
  
      if (unidad === "F") {
        conversion = (valor - 32) / 1.8;
        return `${conversion}°C`;
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const conversionCF2 = (valor = undefined, unidad = "") => {
    try {
      if (valor === undefined) throw new Error("No ingresaste un valor");
      if (typeof unidad !== "string")
        throw new Error("No ingresaste una caracter");
      if (unidad === undefined)
        throw new Error("No ingresaste una unidad valida");
      let conversion;
      if (unidad === "C") {
        conversion = valor * 1.8 + 32;
        return `${conversion}°F`;
      }
  
      if (unidad === "F") {
        conversion = (valor - 32) / 1.8;
        return `${conversion}°C`;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const conversionCF3 = (grados = undefined, unidad = undefined) => {
    if (grados === undefined)
      return console.warn("no ingresaste grados a convertir");
    if (typeof grados !== "number")
      return console.error(`El valor ${grados} ingresado, NO es un número`);
    if (unidad === undefined)
      return console.warn("No ingresaste el tipo de grados a convertir");
    if (typeof unidad !== "string")
      return console.error(
        `El valor ${unidad} ingresado, NO es una cadena de texto`
      );
    if (unidad.length !== 1 || !/(C|F)/.test(unidad))
      console.warn("Valor de unidad no reconocido");
  
    if (unidad === "C") {
      return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
    } else if (unidad === "F") {
      return console.info(
        `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
      );
    }
  };

  /*15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.*/

//Función declarada
function convertirBase1(numero = undefined, caracter = undefined) {
    try {
      if (numero === undefined)
        throw new Error("No ingresaste un numero a convertir");
  
      if (caracter === undefined || (caracter !== "B" && caracter !== "D"))
        throw new Error("No ingresaste una Base valida");
  
      if (typeof numero !== "number")
        throw new Error(`${numero} no es un número`);
  
      if (typeof caracter !== "string")
        throw new Error(`${caracter} no es un carcater valido`);
  
      if (caracter === "B") {
        return `El ${numero} en binario es ${numero.toString(2)}`;
      }
      if (caracter === "D") {
        let binario = parseInt(numero, 2);
        return `El ${numero} en decimal es ${binario}`;
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow Function
  const convertirBase2 = (numero = undefined, caracter = undefined) => {
    try {
      if (numero === undefined)
        throw new Error("No ingresaste un numero a convertir");
  
      if (caracter === undefined || (caracter !== "B" && caracter !== "D"))
        throw new Error("No ingresaste una Base valida");
  
      if (typeof numero !== "number")
        throw new Error(`${numero} no es un número`);
  
      if (typeof caracter !== "string")
        throw new Error(`${caracter} no es un carcater valido`);
  
      if (caracter === "B") {
        return `El ${numero} en binario es ${numero.toString(2)}`;
      }
      if (caracter === "D") {
        let binario = parseInt(numero, 2);
        return `El ${numero} en decimal es ${binario}`;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const convertirBase3 = (numero = undefined, base = undefined) => {
    if (numero === undefined)
      return console.warn("No ingresaste el número a convertir");
    if (typeof numero !== "number")
      return console.Error(`El valor "${numero} ingresado, NO es un número"`);
    if (typeof base !== "number")
      return console.Error(`El valor "${base} ingresado, NO es un número"`);
    if (base === 2) {
      return console.info(
        `El ${numero} base ${base} = ${parseInt(numero, base)} base 10`
      );
    } else if (base === 10) {
      return console.info(
        `El ${numero} base ${base} = ${numero.toString(2)} base 2`
      );
    } else {
      return console.error("El tipo de base a convertir no es valido");
    }
  };
  //--------------------------------------------------------------------------------------------------------------------------------------------------
  
  /*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
  pe. miFuncion(1000, 20) devolverá 800.*/
  
  //Función declarada
  function descuentoTotal1(valor = undefined, descuento = undefined) {
    try {
      if (valor === undefined) throw new Error("No ingresaste un valor");
      if (valor < 0) throw new Error("El valor debe ser mayor a 0");
      if (descuento === undefined) throw new Error("No ingresaste un valor");
      if (descuento < 0 && descuento > 100)
        throw new Error("El descuento debe ser entre 0 y 100");
      return valor * (1 - descuento / 100);
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow function
  const descuentoTotal2 = (valor = undefined, descuento = undefined) => {
    try {
      if (valor === undefined) throw new Error("No ingresaste un valor");
      if (valor < 0) throw new Error("El valor debe ser mayor a 0");
      if (descuento === undefined) throw new Error("No ingresaste un valor");
      if (descuento < 0 && descuento > 100)
        throw new Error("El descuento debe ser entre 0 y 100");
      return valor * (1 - descuento / 100);
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const descuentoTotal3 = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn("No ingresaste el monto");
    if (typeof monto !== "number")
      return console.Error(`El valor "${monto} ingresado, NO es un número"`);
    if (monto === 0) return console.error("El monto no puede ser 0");
    if (Math.sign(monto) === -1)
      return console.error("El monto no puede ser negativo");
    if (typeof descuento !== "number")
      return console.Error(`El valor "${descuento} ingresado, NO es un número"`);
    if (Math.sign(descuento) === -1)
      return console.error("El descuento no puede ser negativo");
  
    return console.info(
      `${monto} - ${descuento}% = ${monto - (monto * descuento) / 100}`
    );
  };
  
  //--------------------------------------------------------------------------------------------------------------------------------------------------
  
  /*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
  pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/
  
  //Función declarada
  function determinarEdad1(fecha = undefined) {
    if (fecha === undefined)
      return console.error("No ingresaste una fecha válidad");
    let hoy = new Date();
    return `${hoy.getFullYear() - fecha.getFullYear()} años`;
  }
  
  //Arrow Function
  const determinarEdad2 = (fecha) => {
    if (fecha === undefined)
      return console.error("No ingresaste una fecha válidad");
    let hoy = new Date();
    return `${hoy.getFullYear() - fecha.getFullYear()} años`;
  };
  
  //Solución del video
  const determinarEdad3 = (fecha = undefined) => {
    if (fecha === undefined)
      return console.error("No ingresaste una fecha válidad");
    if (!(fecha instanceof Date))
      return console.Error(`El valor que ingresaste no es una fecha válida"`);
  
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
      aniosEnMS = 1000 * 60 * 60 * 24 * 365,
      aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
  
    return Math.sign(aniosHumanos) === -1
      ? console.info(
          `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
        )
      : Math.sign(hoyMenosFecha) === 1
      ? console.info(
          `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`
        )
      : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
  };

  /*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
//Función declarada
function contarVoCo1(cadena = undefined) {
    try {
      if (cadena === undefine) throw new Error("No ingresaste una cadena");
      if (typeof cadena !== "string")
        throw new Error("No ingresaste una cadena validad");
  
      let palabras = cadena.toLowerCase().split(""),
        contadorV = 0,
        contadorC = 0;
  
      for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === "a") contadorV++;
        else if (palabras[i] === "e") contadorV++;
        else if (palabras[i] === "i") contadorV++;
        else if (palabras[i] === "o") contadorV++;
        else if (palabras[i] === "u") contadorV++;
        else if (palabras[i] === " ") continue;
        else {
          contadorC++;
        }
      }
      return `Vocales:${contadorV}, Consonantes:${contadorC}`;
    } catch (error) {
      console.error(error);
    }
  }
  //Arrow function
  const contarVoCo2 = (cadena = undefined) => {
    try {
      if (cadena === undefine) throw new Error("No ingresaste una cadena");
      if (typeof cadena !== "string")
        throw new Error("No ingresaste una cadena validad");
  
      let palabras = cadena.toLowerCase().split(""),
        contadorV = 0,
        contadorC = 0;
  
      for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === "a") contadorV++;
        else if (palabras[i] === "e") contadorV++;
        else if (palabras[i] === "i") contadorV++;
        else if (palabras[i] === "o") contadorV++;
        else if (palabras[i] === "u") contadorV++;
        else if (palabras[i] === " ") continue;
        else {
          contadorC++;
        }
      }
      return `Vocales:${contadorV}, Consonantes:${contadorC}`;
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const contarVoCo3 = (cadena = "") => {
    if (!cadena) return console.warn("no ingresaste una cadena de texto");
    if (typeof cadena !== "string")
      return console.error(
        `El valor ${cadena} ingresado, NO es una caena de texto`
      );
    let vocales = 0,
      consonantes = 0;
    cadena = cadena.toLowerCase();
    for (let letra of cadena) {
      if (/[aeiouáéíóúü]/.test(letra)) {
        vocales++;
      }
      if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
        consonantes++;
      }
    }
    return console.info({
      cadena,
      vocales,
      consonantes,
    });
  };
  //--------------------------------------------------------------------------------------------------------------------
  
  /*19) Programa una función que valide que un texto sea un nombre válido, 
  pe. miFuncion("Elian Rojas") devolverá verdadero. */
  
  //Función declarada
  function validarNombre1(nombre = undefined) {
    try {
      if (nombre === undefined) throw new Error("No ingresaste un nombre");
      if (typeof nombre != "String") throw new Error("No ingresaste una cadena");
      let expReg = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
      return expReg.test(nombre) ? true : false;
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow Function
  const validarNombre2 = (nombre = undefined) => {
    try {
      if (nombre === undefined) throw new Error("No ingresaste un nombre");
      if (typeof nombre != "String") throw new Error("No ingresaste una cadena");
      let expReg = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
      return expReg.test(nombre) ? true : false;
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const validarNombre3 = (nombre = "") => {
    if (!nombre) return console.warn("no ingresaste una cadena de texto");
    if (typeof nombre !== "string")
      return console.error(
        `El valor ${nombre} ingresado, NO es una cadena de texto`
      );
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);
    return expReg
      ? console.info(`${nombre}, es un nombre válido`)
      : console.info(`${nombre}, NO es un nombre válido`);
  };
  //--------------------------------------------------------------------------------------------------------------------
  
  /*20) Programa una función que valide que un texto sea un email válido, 
  pe. miFuncion("elian@gmail.com") devolverá verdadero. */
  
  //Función declarada
  function validarEmail1(email = undefined) {
    try {
      if (email === undefined) throw new Error("No ingresaste un email");
      if (typeof email !== "string")
        throw new Error("No ingresaste un email válido");
      let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      return expReg.test(email) ? true : false;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Arrow function
  const validarEmail2 = (email = undefined) => {
    try {
      if (email === undefined) throw new Error("No ingresaste un email");
      if (typeof email !== "string")
        throw new Error("No ingresaste un email válido");
      let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      return expReg.test(email) ? true : false;
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const validarEmail3 = (email = "") => {
    if (!email) return console.warn("no ingresaste una cadena de texto");
    if (typeof email !== "string")
      return console.error(
        `El valor ${email} ingresado, NO es una cadena de texto`
      );
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );
    return expReg
      ? console.info(`${nombre}, es un email válido`)
      : console.info(`${nombre}, NO es un email válido`);
  };
  
  //--------------------------------------------------------------------------------------------------------------------
  //Bonus
  const validarPatron = (cadena = "", patron = undefined) => {
    if (!cadena) return console.warn("no ingresaste una cadena de texto");
    if (patron === undefined) return console.warn("no ingresaste un patron a evaluar");
    if (typeof cadena !== "string")
      return console.error(
        `El valor ${cadena} ingresado, NO es una cadena de texto`
      );
    if (!(patron instanceof RegExp))
      return console.error(
        `El valor ${patron} ingresado, NO es un expresión regular`
      );
    let expReg = patron.test(cadena);
    return expReg
      ? console.info(`${cadena}, cumple con el patron ingresado`)
      : console.info(`${cadena}, NO cumple con el patron ingresado`);
  };
  /*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

//Función declarada
function elevarNumeros1(arreglo = undefined) {
    try {
      if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
      if (!(arreglo instanceof Array))
        throw new Error("El valor no es del tipo arreglo");
  
      let aux = [];
  
      for (let i = 0; i < arreglo.length; i++) {
        aux[i] = arreglo[i] * arreglo[i];
      }
      return aux;
    } catch (error) {
      console.error(error);
    }
  }
  
  //Arrow Function
  const elevarNumeros2 = (arreglo = undefined) => {
    try {
      if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
      if (!(arreglo instanceof Array))
        throw new Error("El valor no es del tipo arreglo");
  
      let aux = [];
  
      for (let i = 0; i < arreglo.length; i++) {
        aux[i] = arreglo[i] * arreglo[i];
      }
      return aux;
    } catch (error) {
      console.error(error);
    }
  };
  
  //Solución del video
  const elevarNumeros3 = (arre = undefined) => {
    if (arre === undefined)
      throw new Error("No ingresaste un arreglo de numeros");
    if (!(arre instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    if (arre.length === 0) return console.error("El arreglo esta vacio");
    for (let num of arre) {
      if (typeof num !== "number") {
        return console.error(`El valor ${num} ingresado no es un número`);
      }
    }
  
    const newArr = arre.map((el) => el * el);
    return console.info(
      `Arreglo original: ${arre}, \nArreglo elevado al cuadradp: ${newArr}`
    );
  };
  //----------------------------------------------------------------------------------------------------
  
  /*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
  pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/
  
  //Función declarada
  function mayorMenor1(arreglo = undefined) {
    if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    let aux = [],
      mayor = arreglo[0],
      menor = arreglo[0];
  
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] > mayor) {
        mayor = arreglo[i];
      }
      if (arreglo[i] < menor) {
        menor = arreglo[i];
      }
    }
    return [mayor, menor];
  }
  
  //Arrow function
  const mayorMenor2 = (arreglo = undefined) => {
    if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    let aux = [],
      mayor = arreglo[0],
      menor = arreglo[0];
  
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] > mayor) {
        mayor = arreglo[i];
      }
      if (arreglo[i] < menor) {
        menor = arreglo[i];
      }
    }
    return [mayor, menor];
  };
  
  //Solución del video
  const mayorMenor3 = (arre = undefined) => {
    if (arre === undefined)
      throw new Error("No ingresaste un arreglo de numeros");
    if (!(arre instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    if (arre.length === 0) return console.error("El arreglo esta vacio");
    for (let num of arre) {
      if (typeof num !== "number") {
        return console.error(`El valor ${num} ingresado no es un número`);
      }
    }
  
    return console.info(
      `Arreglo original: [${arre}] \nValor mayor: ${Math.max(
        ...arre
      )} \nValor menor: ${Math.min(...arre)}`
    );
  };
  //----------------------------------------------------------------------------------------------------
  
  /*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
  pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
  
  //Función declarada
  function parImpar1(arreglo = undefined) {
    if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    let pares = [],
      impares = [];
  
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        pares.push(arreglo[i]);
      } else {
        impares.push(arreglo[i]);
      }
    }
    return `pares: [${pares}], impares: [${impares}]`;
  }
  
  //Arrow function
  const parImpar2 = (arreglo = undefined) => {
    if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    let pares = [],
      impares = [];
  
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        pares.push(arreglo[i]);
      } else {
        impares.push(arreglo[i]);
      }
    }
    return `pares: [${pares}], impares: [${impares}]`;
  };
  
  //Solución del video
  const parImpar3 = (arre = undefined) => {
    if (arre === undefined)
      throw new Error("No ingresaste un arreglo de numeros");
    if (!(arre instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    if (arre.length === 0) return console.error("El arreglo esta vacio");
    for (let num of arre) {
      if (typeof num !== "number") {
        return console.error(`El valor ${num} ingresado no es un número`);
      }
    }
    return console.info({
      pares: arre.filter((num) => num % 2 === 0),
      impares: arre.filter((num) => num % 2 === 1),
    });
  };

  /*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

//Función declarada
function ordenarArreglo1(arreglo = undefined) {
    if (arreglo === undefined)
      throw new Error("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    if (arreglo.length === 0) return console.error("El arreglo esta vacio");
    for (let num of arreglo) {
      if (typeof num !== "number") {
        return console.error(`El valor ${num} ingresado no es un número`);
      }
    }
  
    let ordenado, asc, desc;
    ordenado = arreglo.slice();
  
    for (let i = 0; i < ordenado.length; i++) {
      for (let j = 0; j < ordenado.length - 1; j++) {
        if (ordenado[j] > ordenado[j + 1]) {
          let aux = ordenado[j];
          ordenado[j] = ordenado[j + 1];
          ordenado[j + 1] = aux;
        }
      }
    }
    asc = ordenado;
    desc = asc.slice();
  
    return {
      arreglo,
      asc,
      desc: desc.reverse(),
    };
  }
  
  //Arrow Function
  const ordenarArreglo2 = (arreglo = undefined) => {
    if (arreglo === undefined)
      throw new Error("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    if (arreglo.length === 0) return console.error("El arreglo esta vacio");
    for (let num of arreglo) {
      if (typeof num !== "number") {
        return console.error(`El valor ${num} ingresado no es un número`);
      }
    }
  
    let ordenado, asc, desc;
    ordenado = arreglo.slice();
  
    for (let i = 0; i < ordenado.length; i++) {
      for (let j = 0; j < ordenado.length - 1; j++) {
        if (ordenado[j] > ordenado[j + 1]) {
          let aux = ordenado[j];
          ordenado[j] = ordenado[j + 1];
          ordenado[j + 1] = aux;
        }
      }
    }
    asc = ordenado;
    desc = asc.slice();
  
    return {
      arreglo,
      asc,
      desc: desc.reverse(),
    };
  };
  
  //Solución del video
  const ordenarArreglo3 = (arreglo = undefined) => {
    if (arreglo === undefined)
      throw new Error("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    if (arreglo.length === 0) return console.error("El arreglo esta vacio");
    for (let num of arreglo) {
      if (typeof num !== "number") {
        return console.error(`El valor ${num} ingresado no es un número`);
      }
    }
  
    return console.info({
      arreglo,
      asc: arreglo.map((el) => el).sort(),
      desc: arreglo
        .map((el) => el)
        .sort()
        .reverse(),
    });
  };
  
  //-----------------------------------------------------------------------------------------------
  
  /*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
  pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/
  
  //Solución del video
  const quitarDuplicados3 = (arreglo = undefined) => {
    if (arreglo === undefined)
      throw new Error("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    if (arreglo.length === 0) return console.error("El arreglo esta vacio");
    if (arreglo.length === 1)
      return console.error("El arreglo debe tener al menos dos elementos");
  
    return {
      original: arreglo,
      sinDuplicados: arreglo.filter(
        (value, index, self) => self.indexOf(value) === index
      ),
    };
  };
  
  //-----------------------------------------------------------------------------------------------
  
  /*26) Programa una función que dado un arreglo de números obtenga el promedio, 
  pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
  
  // Función declarada
  function promedio1(arreglo = undefined) {
    if (arreglo === undefined)
      throw new Error("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    if (arreglo.length === 0) return console.error("El arreglo esta vacio");
    for (let num of arreglo) {
      if (typeof num !== "number") {
        return console.error(`El valor ${num} ingresado no es un número`);
      }
    }
    let sumatoria = 0;
    for (let i = 0; i < arreglo.length; i++) {
      sumatoria += arreglo[i];
    }
  
    return sumatoria / arreglo.length;
  }
  
  //Arrow function
  const promedio2 = (arreglo = undefined) => {
    if (arreglo === undefined)
      throw new Error("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    if (arreglo.length === 0) return console.error("El arreglo esta vacio");
    for (let num of arreglo) {
      if (typeof num !== "number") {
        return console.error(`El valor ${num} ingresado no es un número`);
      }
    }
    let sumatoria = 0;
    for (let i = 0; i < arreglo.length; i++) {
      sumatoria += arreglo[i];
    }
  
    return sumatoria / arreglo.length;
  };
  
  //Solución video
  const promedio3 = (arreglo = undefined) => {
    if (arreglo === undefined)
      throw new Error("No ingresaste un arreglo de numeros");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");
    if (arreglo.length === 0) return console.error("El arreglo esta vacio");
    for (let num of arreglo) {
      if (typeof num !== "number") {
        return console.error(`El valor ${num} ingresado no es un número`);
      }
    }
  
    return console.info(
      arreglo.reduce((total, num, index, arr) => {
        total += num;
        if (index === arr.length - 1) {
          return `El promedio de ${arr.join("+")} es: ${total / arr.length}`;
        }
        else{
          return total;
        }
      })
    );
  };

  /*
27) Programa una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, 
titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
      aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
      decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
      instancias de la clase de forma automatizada e imprime la ficha técnica 
      de cada película.
    Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,
    Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, 
    Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
      this.id = id;
      this.titulo = titulo;
      this.director = director;
      this.estreno = estreno;
      this.pais = pais;
      this.generos = generos;
      this.calificacion = calificacion;
  
      this.validarIMDB(id);
      this.validarTitulo(titulo);
      this.validarDirector(director);
      this.validarEstreno(estreno);
      this.validarPais(pais);
      this.validarGeneros(generos);
      this.validarCalificacion(calificacion);
    }
  
    static get listaGeneros() {
      return [
        "Action",
        "Adult",
        "Adventure",
        "Animation",
        "Biography",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "Film Noir",
        "Game-Show",
        "History",
        "Horror",
        "Musical",
        "Music",
        "Mystery",
        "News",
        "Reality-TV",
        "Romance",
        "Sci-Fi",
        "Short",
        "Sport",
        "Talk-Show",
        "Thriller",
        "War",
        "Western",
      ];
    }
  
    static generosAceptados() {
      return console.info(
        `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
      );
    }
  
    validarCadena(propiedad, valor) {
      if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
      if (typeof valor !== "string")
        return console.error(
          `${propiedad} "${valor}" ingresado, NO es una cadena de texto`
        );
    }
  
    validarLongitudCadena(propiedad, valor, longitud) {
      if (valor.length > longitud)
        return console.error(
          `${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`
        );
      return true;
    }
  
    validarNumero(propiedad, valor) {
      if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
      if (typeof valor !== "number")
        return console.error(
          `${propiedad} "${valor} ingresado, NO es un numero"`
        );
  
      return true;
    }
  
    validarArreglo(propiedad, valor) {
      if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
      if (!(valor instanceof Array))
        return console.error(
          `${propiedad} "${valor}" ingresado, NO es un arreglo`
        );
      if (valor.length === 0) return console.error("no tiene datos");
      for (let num of valor) {
        if (typeof num !== "string") {
          return console.error(
            `El valor ${num} ingresado no es un cadena de texto`
          );
        }
      }
  
      return true;
    }
  
    validarIMDB(id) {
      if (this.validarCadena("IMDB id", id)) {
        if (!/^([a-z]{2}([0-9]){7}$)/.test(id)) {
          return console.error(
            `IMDB id "${id}" no es váñido, debe tener 9 carcateres, los 2 primeros letras minusculas, los 7 restantes numeros`
          );
        }
      }
    }
  
    validarTitulo(titulo) {
      if (this.validarCadena("Titulo", titulo)) {
        this.validarLongitudCadena("Titulo", titulo, 100);
      }
    }
  
    validarDirector(director) {
      if (this.validarCadena("Director", director)) {
        this.validarLongitudCadena("Director", director, 50);
      }
    }
  
    validarEstreno(estreno) {
      if (this.validarNumero("Año de estreno", estreno)) {
        if (!/^([0-9]){4}$/.test(estreno)) {
          return console.error(
            `Año de estreno "${estreno}" no es válido, debe ser un numero de 4 digitos`
          );
        }
      }
    }
  
    validarPais(pais) {
      this.validarArreglo("Pais", pais);
    }
  
    validarGeneros(generos) {
      if (this.validarArreglo("Géneros", generos)) {
        for (const genero of generos) {
          if (!Pelicula.listaGeneros.includes(genero)) {
            console.error(`Géneros incorrectos "${generos.join(", ")}`);
            Pelicula.generosAceptados();
          }
        }
      }
    }
  
    validarCalificacion(calificacion) {
      if (this.validarNumero("Calificación", calificacion))
        return calificacion < 0 || calificacion > 10
          ? console.error("La calificación tiene que estar entre 0 y 10")
          : (this.calificacion = calificacion.toFixed(1));
    }
  
    fichaTecnica() {
      console.info(
        `Ficha Técnica: \nTítulo: ${this.titulo} \nDirector: ${
          this.director
        }\nAño: ${this.estreno} \nPais: ${this.pais.join(
          ", "
        )}\nGéneros: ${this.generos.join(", ")}\nCalificación: ${
          this.calificacion
        }\nIMDB id: ${this.id}`
      );
    }
  }
  
  const peliculas = [
    {
      id: "tt1234567",
      titulo: "el titulo",
      director: "Manuel medarno",
      estreno: 2020,
      pais: ["Mexico"],
      generos: ["Comedy", "Sport"],
      calificacion: 1,
    },
    {
      id: "tt1234567",
      titulo: "el titulo",
      director: "Manuel medarno",
      estreno: 2020,
      pais: ["Mexico"],
      generos: ["Comedy", "Sport"],
      calificacion: 2,
    },
    {
      id: "tt1234567",
      titulo: "el titulo",
      director: "Manuel medarno",
      estreno: 2020,
      pais: ["Mexico"],
      generos: ["Comedy", "Sport"],
      calificacion: 8,
    },
  ];
  
  peliculas.forEach((el) => new Pelicula(el).fichaTecnica());
  
  
 
  
  
  