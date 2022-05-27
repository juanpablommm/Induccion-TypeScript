class Persona{
    /**Atributos y metodos staticos 
     * se definene un metodo o atributo statitoc cunando pertenencen
     * al ambito statico y no al dinamico, es decir que son propios de la 
     * clase y no del objeto.
     * cuando una atributo es del objecto cada ves que se crea un objecto, 
     * las varibales se crean con el, si se crea otro se crearan nuevas variables,
     * en cambio si estas son estatica solo se crearan una sola vez, y no se estaran creando, 
     * nuevas cada vez que se cree un objecto.
     * 
     * al igual que en jaca funcionan igual, se llaman los metodos o atributos estaticos con el nombre
     * de la clase
    */
    static _nombre:string = "juancho";
    private apellido:string;
    static url:string = "https://localhost/8080";
    private edad:number;

    constructor(apellido:string, edad:number){
        this.apellido = apellido;
        this.edad = edad;
    }

    static obtenerFotos():string{
        /**interpolacion.
         * aplicanod las commilas abiertas en ellas el $ 
         * y dentro de las llaves el nombre de la varaible podemos
         * concatener sin necesidad de utilizar el mas
         */
        return `${this.url}/fotos`
    }
    static hablar(): string{
        return "hola como estasn?"
    }
}

let persona: Persona =  new Persona("juan pablo", 23);
console.log(Persona._nombre);
console.log(Persona.obtenerFotos());