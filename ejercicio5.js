// registro interactivo - concesionario de vehiculos
// se crea la funcion constructora
var prompt = require('prompt-sync')();

function Vehiculo(marca, color, tipo, placa, modelo, kilometraje) {
    this.marca = marca;
    this.color = color;
    this.tipo = tipo;
    this.placa = placa;
    this.modelo = modelo;
    this.kilometraje = Number(kilometraje); // se ajusta el parametro para que sea tomado como number
    this.encendido = false; // todos empiezan apagados
    // dentro de la funcion se hace una impresion de lo que ingreso el usuario
    console.log("Tu auto es " + marca + " de color " + color + " es de tipo " + tipo + ", su placa es " + placa + " y el modelo es " + modelo);

    // metodo 1 encender (modifica encendido)
    this.encender = function() {
        this.encendido = true;
        console.log("El " + this.marca + " " + this.modelo + " ahora esta encendido");
    }

    // metodo 2 recorrer (modifica kilometraje)
    this.recorrer = function(km) {
        this.kilometraje = this.kilometraje + Number(km);
        console.log("El " + this.marca + " recorrio " + km + " km. Total: " + this.kilometraje + " km");
    }

    // metodo 3 pintar (modifica color)
    this.pintar = function(nuevoColor) {
        this.color = nuevoColor;
        console.log("El " + this.marca + " " + this.modelo + " ahora es de color " + this.color);
    }

    // metodo 4 mostrar la info
    this.mostrarInfo = function() {
        console.log("Vehiculo: " + this.marca + " " + this.modelo + " (" + this.tipo + "), placa " + this.placa + ", color " + this.color + ", " + this.kilometraje + " km, encendido: " + this.encendido);
    }
}

// se piden los datos de 3 vehiculos diferentes con prompt()
var vehiculos = [];

for (var i = 1; i <= 3; i++) {
    console.log("---- Vehiculo " + i + " ----");
    var marca = prompt("Marca del vehiculo " + i + ": ");
    var color = prompt("Color del vehiculo " + i + ": ");
    var tipo = prompt("Tipo del vehiculo " + i + ": ");
    var placa = prompt("Placa del vehiculo " + i + ": ");
    var modelo = prompt("Modelo del vehiculo " + i + ": ");
    var kilometraje = prompt("Kilometraje del vehiculo " + i + ": ");
    // se crea el objeto con la palabra new
    var carro = new Vehiculo(marca, color, tipo, placa, modelo, kilometraje);
    vehiculos.push(carro);
}

// se ejecutan los metodos creados y se muestran en consola
for (var j = 0; j < vehiculos.length; j++) {
    console.log("===== Resultado vehiculo " + (j + 1) + " =====");
    vehiculos[j].mostrarInfo();
    vehiculos[j].encender();
    vehiculos[j].recorrer(120);
    vehiculos[j].pintar("negro");
    vehiculos[j].mostrarInfo();
}
