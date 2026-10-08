// control de estado modificables - biblioteca
// se crea la funcion constructora
function Libro (titulo,autor,paginas,prestado){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = Number(paginas); // se le ajusta el parametro para que sea tomado como numnber
    this.prestado = prestado; // igual que se hizo en paginas pero este dice si esta prestado o no
    // dentro de la funcion se hace una impresion de terminal que siempre modificara titulo, autor, paginas y prestado
    console.log(`Hola y bienvenido a la biblioteca, tu libro es titulo(${titulo}) , del autor ${autor} tiene ${paginas} paginas y prestado es ${prestado}` )
    this.prestar = function(){
        if(this.prestado == false){
            this.prestado = true;
            console.log(`El libro ${titulo} fue prestado` )
        } else {
            console.log(`ALERTA! el libro ${titulo} ya fue prestado` )
        }
    }
    this.devolver = function(){
        if(this.prestado == true){
            this.prestado = false;
            console.log(`El libro ${titulo} fue devuelto` )
        } else {
            console.log(`ALERTA! el libro ${titulo} no estaba prestado, no se puede devolver` )
        }
    }
}
const libro1 = new Libro("el principito","Antoine de Saint-Exupéry",100,false)
libro1.prestar()
libro1.prestar()
libro1.devolver()
libro1.devolver()
