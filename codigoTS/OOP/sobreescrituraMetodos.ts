class Persona{
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
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
    /*recordar que cuando nace el objeto de hijo, primero debe nacer el padre,
    por lo cual cuando se llame al constructor de la clase hija, este debe hacer una
    llamada al del padre y setearle los parametros que este tenga en su constructor*/
    constructor(nombre:string, apellido:string, edad:number){
        super(nombre, apellido,edad);
    }

    /*al crear un metodo en la case hija con el mismo nombre que uno de la clase padre,
    cabe recordad que empezamos a soobreescribir el comportamiento de este. de alguna forma polimorfismo.
    */
    saludar(){
        console.log("hola, te saluda el estudiante")
    }
    jugar(){
        console.log("jugando...");
    }
}

let student: Persona = new Student("nombre", "junacho", 23);
/*student.jugar();
cabe recordar que un object de tipo de la calse padre no puede aceder a los metodos 
de la case hija, asi sea instanciado con la clase hija, por ser simplemente del tipo
de la clase padre solo tendra acceso a los metods que esta clase contenga.
solo se podra si la clase hija sobreescribe un metodo de la clase padre, de esta manera,
cuando se llame al metodo en comun, se ejcutara la implementacion del metodo que tanga la clase hija*/

student.saludar();

/*un jecto del tipo de la clase hija e instanciado como el mismo, podra tener acceso tanto,
a los metodos propios como a los que hereda de la clase padre*/
let studiante: Student = new Student("jhony", "bravo", 21);

studiante.saludar();
studiante.jugar();
