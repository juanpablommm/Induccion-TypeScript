class Persona{
    private _nombre:string;
    private apellido:string;
    private edad:number;

    constructor(nombre:string, apellido:string, edad:number){
        this._nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    /*GETTERS AN SETTERS 
    los metodos geter y seter en typeScript
    se declaran, mediante las palabras reservadas
    get y set, y para ellos losa atributos se deben 
    de llmar distinto, casi siempre se sopprepone al inicio 
    del nombre de el atributo un _ para cuando se creen los 
    metodos seter y geter no indiquen que el nombre ya existe*/

    get nombre(): string{
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }

/*  en typeSrip no se usa
    getNombre(): string{
        return this.nombre;
    }
    setNomre(nombre:string){
        this.nombre = nombre;
    }
*/
}

let persona: Persona =  new Persona("juan pablo", "yolo", 23);

/** cuando se accede a los emtdos getter y seter de una clase parace que 
 * lo estuvieramos haciendo directamente al atributo aunque no sea asi
*/
console.log(persona.nombre);
persona.nombre = "jhony bravo";
console.log(persona.nombre);
