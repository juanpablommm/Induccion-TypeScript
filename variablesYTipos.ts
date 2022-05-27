//declaracion de variables en typeScript
/*la varibles se declaran al igual que en
javaScript con llas palabras clave
*let
*var
*const
seguido de esto se aplica el nombre 
dos puntos y el tipo de dato y finalemente
se aplica el igual para asignacion del valor.

al igual que en javaScript el uso de la palabra var, 
es una mala practica que debemos evitar.*/

let nombre: string = "juan pablo";
const carro: boolean = true;
let edad: number = 23;
/*como typeScript es un super setf de JavaScript
si necesitamos no specificar el tipo de 
dado de una variable podesmo simplemente
declararla como se realizaria en javaScript,
o aplicar el tipo any, pero esto no es muy recomendado
ni tampoco usado dado que una de las principales
ventajas de typeScript sobre JavaScipt es el tipado
fuerte.*/

let apellido;
let balon: any;
