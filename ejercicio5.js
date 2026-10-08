// Registor interactivo- conccesionario de vehiculos



function Vehiculo(marca,color,tipo,placa,modelo){
 //auto 1
this.marca = marca = prompt(`introduce la marca de tu primer vehiculo:` );
 this.color = color = prompt(`introduce el color:` );
 this.tipo = tipo =  prompt(`introduce el tipo de vehiculo:` );;
 this.placa = placa = prompt(`introduce el numero de la placa:` );;
 this.modelo = modelo = prompt(`introduce el año del modelo:` );;
 console.log(`=======================================================`)
 console.log(`Tu auto #1 es ${marca} de color ${color} es de tipo ${tipo}, su numero de placa es ${placa} y y el año del modelo es ${modelo}`)
console.log(`=======================================================`)

 //auto 2
this.marca = marca = prompt(`introduce la marca de tu segundo vehiculo:` );
this.color = color = prompt(`introduce el color:` );
this.tipo = tipo =  prompt(`introduce el tipo de vehiculo:` );;
this.placa = placa = prompt(`introduce el numero de la placa:` );;
this.modelo = modelo = prompt(`introduce el año del modelo:` );;
console.log(`=======================================================`)
console.log(`Tu auto #2 es ${marca} de color ${color} es de tipo ${tipo}, su numero de placa es ${placa} y y el año del modelo es ${modelo}`)
 console.log(`=======================================================`)

//auto 3
this.marca = marca = prompt(`introduce la marca de tu segundo vehiculo:` );
this.color = color = prompt(`introduce el color:` );
this.tipo = tipo =  prompt(`introduce el tipo de vehiculo:` );;
this.placa = placa = prompt(`introduce el numero de la placa:` );;
this.modelo = modelo = prompt(`introduce el año del modelo:` );;
console.log(`=======================================================`)
console.log(`Tu auto #3 es ${marca} de color ${color} es de tipo ${tipo}, su numero de placa es ${placa} y y el año del modelo es ${modelo}`)
 console.log(`=======================================================`)







}
const prompt = require('prompt-sync')();
const usuario1 = new Vehiculo();


/*
 Sube const prompt = require('prompt-sync')(); a la línea 2, arriba de todo.
2. Deja el constructor limpio solo con 5 líneas: this.marca = marca; this.color = color; ... this.modelo = Number(modelo); — borra todos los prompt de adentro (líneas 7-31) y los marca2/marca repetidos.
3. Agrega los 3 métodos adentro con this, ej: this.mostrarInfo, this.vender (que cambie this.disponible = false), this.pitar. Al menos uno debe hacer this.algo = ....
4. Si agregas una 6ta propiedad para el método que modifica (ej. disponible o encendido), súmala al constructor.
5. Abajo, fuera del constructor, pide los datos con let: let marca1 = prompt(...), let color1... y así para los 3 (15 prompts en total).
6. Crea los 3 objetos: const vehiculo1 = new Vehiculo(marca1,color1,tipo1,placa1,modelo1) y lo mismo para 2 y 3.
7. Ejecuta los métodos: vehiculo1.mostrarInfo(); vehiculo1.vender(); etc.
8. Limpia typos: quita los ;; dobles y el y y el año.
9. Prueba con node ejercicio5.js — debe pedir datos 1 vez por vehículo y mostrar los métodos sin ReferenceError.
▣  Build · Muse Spark 1.3 Free · 5.6s

*/