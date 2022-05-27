class Persona{
    nombre:string;
    apellido:string;
    edad:number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombre(): string{
        return this.nombre;
    }
    setNomre(nombre:string){
        this.nombre = nombre;
    }

    getApellido(): string{
       return this.apellido; 
    }
    setApellido(apellido:string){
        this.apellido = apellido;
    }

    getEdad(): number{
        return this.edad;
    }

    setEdad(edad: number){
        this.edad = edad;
    }
}

class Student extends Persona{
}

/*La herencia, se aplica con base en la OOP,
no ahy cambio un obejct que hereda de otro, obtiene 
todos sus etodos y atributos.

*cuando el object hijo va a nacer primero nacera el padre,
por ende se pasan por paramtros al constructor del hijo, los
parametros para llenar los atributos del padre mas los propios*/

let student: Student = new Student("juan pablo", "montoya", 23);
console.log("el estudiante " + student.getNombre() + " tiene " + student.getEdad());