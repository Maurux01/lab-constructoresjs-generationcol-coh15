// logica de neogico automatica- Plataforma de cursos

function Estudiante(nota1, nota2, nota3) {
    this.nota1 = Number(nota1);
    this.nota2 = Number(nota2);
    this.nota3 = Number(nota3); // se le ajusta el parametro para que sea tomado como numnber
    this.mostrarResultado = function() { //funcion que calcula el resultado
        let promedio = Math.round((this.nota1 + this.nota2 + this.nota3)/3)
        if (promedio < 3.0) {
            console.log(`Lo sentimos como tu nota final fue ${promedio} no apruebas el curso`)

        } else {
            console.log(`Tu nota final fue (${promedio}), felicidades aprobaste el curso! `)
        }
    } 

} 
// definicion de constantes(variables)
const estudiante1 = new Estudiante(1, 2, 3)
const estudiante2 = new Estudiante(8, 2, 6)
const estudiante3 = new Estudiante(10, 10, 10)
const estudiante4 = new Estudiante(2, 1, 3)

// llamado de funcion para cada variable
estudiante1.mostrarResultado()
estudiante2.mostrarResultado()
estudiante3.mostrarResultado()
estudiante4.mostrarResultado()

