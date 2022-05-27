class Persona{
    /*MODIFICADORES DE ACCESO
    *private = privado solo para la clase
    *protected = protejido solo para la clase y las
    que hereden de esta
    *public = publica para todos 
    *readOnly = de solo lectura*/
    private nombre: string;
    protected apellido: string;
    public edad: number;
    readonly genero: string;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = "masculino";
    }

    getNombre():string{
        return this.nombre;
    }   

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    
    getApellido():string{
        return this.apellido;
    }   

    setApellido(apellido:string){
        this.apellido = apellido;
    }

    getEdad():number{
        return this.edad;
    }   

    setEdad(edad:number){
        this.edad = edad;
    }

    saludar(){
        console.log("hola como estas?");
    }
}

class Student extends Persona{
    constructor(nombre:string, apellido:string, edad:number){
        super(nombre, apellido,edad);
    }

    /**un atributo de tipo protected puede ser accesido desde las clase
     * que extiendad de la clase padre.
    */
    apellido = "bravo";

    /**un atributo de tipos private no puede ser accedido desde ningun
     * otro lado que no sea dentro de la clase que lo contiene
     */
    /*nombre = "juan";*/
}

let student: Persona = new Student("nombre", "junacho", 23);
/**un atributo declarado como ublico puede ser accedido desde cualquier clase.*/
console.log(student.edad);

/**un atributo redOnly puede ser accedido poc aulquier clase, pero con la diferecnia
 * que este no puede ser escrito, solo es de lectura*/
console.log(student.genero);
/*student.genero= "femina";*/

