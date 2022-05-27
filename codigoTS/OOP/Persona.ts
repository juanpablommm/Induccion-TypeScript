//Clases Y Objectos

/*las clases en TypeScript
se declaran con la plabra reservada class, 
nombre de la clase y llaves.*/

class Persona{

    /*recordando la OOP los atributos son varibles
    que representan las caracteristicas de un objecto del mundo.
    *para definir un atributo en TypeScript, no tnemos que especicar
    el ambito de varibles con (let, const, var), sino que simplement
    se le da un nombre al atributo, y el tipo de dato.
    posteriomente en el constuctor cando lo inicalicemos o en el un metodo
    que lo llamemos no podemos llamarlo simplemnte con le nombre sino que
    necesitamos la plabra reservadaa this, para indicar que es un atributo
    de esta clase que estamos manejando*/
    nombre: string;
    
    /*constuctor,
    aplicanod los conceptos basicos
    de prpogramacion OOP, sabemos que el constructor,
    es un metodo que se ejecuta el inicio de la clase,
    y que basicamente nos sirve para inicializar los
    atributos de la clase.
    
    /*El contructor en TypeScript no se puede soobrecarga
    *Este no se delara con el nombre de la clase sino con la
    la palabra clave constuctor
    */

    
    constructor(nombre:string){
        this.nombre = nombre;
        console.log(this.nombre);
    }

    /*Metodos,
    Los metodos al ser basicamente funciones se crean ingual.*/
    getNombre(): string{
        return this.nombre;
    }

    setNombre(nombre: string){
        this.nombre = nombre;
    }

    printNombre(){
        console.log(this.nombre);
    }
}

/*los objectos se crean, especificando el 
especiciando el ambito de variable, let, const, var (no recomendado)
seguido del nombe y el tipo, de la clase a paetir de la cual se crea,
y con realizando la instancia de esa clase para la reacion del 
object pasandole los paremtros que tenga o no el constuctor*/
let persona: Persona = new Persona("juan pablo");

/*los llamdos de los metodos se reliazaon al igual que en java, el nombre de nuseestro
object y la concatenacion del . para llamar al metodo o atributo que se necesiten de la clase
y segun su encasuplamiento */
console.log("llamndo al metodo getNombre");
console.log(persona.getNombre());
persona.setNombre("juanncho rpiz");
console.log(persona.getNombre());
persona.printNombre();
