//interface 
/**Una interface se puede denominar como un esqueleto,
 una plantilla vacia que los objectos deben de cumplir
 para poderla implmentar.
 *Se declara igual que en java con la plabra interface,
 pero a diferencia de una interface en java, en TypeScript 
 se pueden declarar atributos en vez de solo metodos,
 los cuales sera implemntados en las clases que implementes 
 estas interfaces.
* se pueden impmentar variaas interfaces como en java a un calse.
y se pude tener una herencia multiple solo a nivel de interfaces 
 */
interface Acces{
    x: string;
    y: string;
    width: string;
    height: string;
    getCoords():string;

    /*
    static run() void{
        console.log("I'm runing...");
    }*/
}

class Hero implements Acces{
    x: string = "";
    y: string = "";
    width: string = ""
    height: string = "";
    
    getCoords():string{
        return "";
    }
}

class Buller{

}
/**creo mi objec de type of the interface, pero con la intancia de mi objecto hero en particular */
let hero:Acces = new Hero();
class Enemy{
    
}

class Collisions{
    static check(object1: Acces, object2:Acces){
        //validar que exista forma de comparar los elmentos
        //comparar objec1 with object2
    }
}
