// Encapsulamiento de comportamiento - sistema de veterinaria

function Mascota (nombre,especie,edad,peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = Number(edad); // se le ajusta el parametro para que sea tomado como numnber
    this.peso = Number(peso); // igual que se hizo en line 6 tambien para precio
    // dentro de la funcion se hace una impresion de terminal que siempre modificara los datos de la mascota ingresada
    console.log(`Bienvenido a la petshop!, tu mascota seleccionada se llama ${nombre} , es un ${especie}, tiene una edad de ${edad} meses  y su peso es  ${peso} kg` )
}
const mascota1 = new Mascota("MAX","POMERANIAN",4, 4.5)
const mascota2 = new Mascota("LUCAS","PINSCHER",10, 5)
const mascota3 = new Mascota("PRINCESA","POODLE", 12, 18)