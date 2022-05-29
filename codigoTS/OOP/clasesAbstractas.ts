/**clases abstractas
 * las clases abstractas en typeScrip funcionan casi de la misma manera que en java,
  y basicmanete lo que las diferencia de las interfaces es que estan pueden tener implemntacions
  de los metodos y varibales inicilizadas, pero podemos declarar metodos abstractos es decir
  que solo los declaramos pero las clases hijas que herende de una clase abtracta estan obligadas a 
  implemntar la logica de dichos metodos abtractos segun como lo necesiten.
  
  *las clases abstractas en typeScrip,necesitan de un constructor para poder instanciar los
  atributos que estas tengan, constructor aue sera llamado desde la clase hija para psarle parametros.

  *los metodos abstractos se declaran igual que ne jva, con la plabra clase bastrac y sin tener una impmentacion.
pues esta la haran las clases hijas
 
*/

abstract class Asset{
    x: number;
    y: number;
    width: number;
    heigth: number;

    constructor(x:number, y:number, widht:number, heigth:number){
        this.x = x;
        this.y = y;
        this.width = widht;
        this.heigth = heigth;
    }
    abstract move():number;
}

class Hero extends Asset{

    constructor(x:number, y:number, width:number, heigth:number){
        super(x, y, width, heigth);
    }
    
    move():number{
        return 23;
    }
}

/*cabe recordar y tener en cuanta que al igual que las interfaces las clases abstractas no 
pueden tener una instancia, a pesar que en typeScrip las clases abstractas manejan un constructor,
solo podemos declrar los object de tipo de la clase abstract y hacer la instancia con lca clase hija 
en particular */
let asset: Asset = new Hero(12, 12, 12, 12);