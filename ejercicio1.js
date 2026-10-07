//modelado de inventario - tienda de tecnologia 
// se crea la funcion constructiora
function Computador (marca,procesador,ram,precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ram = Number(ram); // se le ajusta el parametro para que sea tomado como numnber
    this.precio = Number(precio); // igual que se hizo en ram tambien para precio
    // dentro de la funcion se hace una impresion de terminal que siempre modificara marca, procesador, ram y precio, ademas se usa el method precio.toLocaleString() para hacer ver al numero mas legible con decimales
    console.log(`Hola, gracias por comprar, tu computador seleccionado es de la marca ${marca} , un procesador de la marca ${procesador} tiene una ram de ${ram} GB y su valor es de $${precio.toLocaleString()} pesos` )
}
const computer1 = new Computador("HP","INTEL",64,1000000)
const computer2 = new Computador("DELL","AMD",32, 9000000)
const computer3 = new Computador("LENOVO","INTEL",128, 25000000)