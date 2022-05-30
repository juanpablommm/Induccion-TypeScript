//DECORADORES
/**
 * Es un patron de programacion en el que tomamos 
 algo, una propiedad, una clase, metodo etc,
 y lo decoramos, agregando funcionalidades, cosas 
 y retornarlo decorado, el proposito es extender la funcionalidad 
 de otro componente sin modificarlo constantemente.

 son utlizandos en framwrokds como angular.

 *no son mas que funciones que se mandan a llamr con siertos
 argumentos especificos.

*las parte funcamental de un decorador se encuentra en los
parametros que se defienen en la funcion y los argumentos que
esta recibe cuando se ejecuta
*/
/*definimos que recibimos una funcion como parametro
*pues para declarar una clase el parametro de la funcion
debe de ser otra funcion, lo cual lo indicamos diciendo
que el parametro es de tipo function.
esta funcion representara al constructor de la clase, 
pero no quiere decir que se recibe el constructor.
es mas bien la funcion con la que se crean los objectos*/
function decorador(cls: Function){
    console.log("Soy un decorador en ejecucion");

    /*vamos agregar una propiedad clasName al prototype de
     de la funcion que recibimos, es decir que todos los objetos
     que recibamos tendra esta propieda.
     
     con la propieda prototype podemos agregar propiedades y funciones para 
     totos los obejectos que se crean a partir de este prototype*/

    cls.prototype.className = cls.name;
}


@decorador
class Speaker{
/**creamos la clase que vamos a decorar
 * depues para hacer uso del decorador utilizamos la
 * atoacion estilo java, con @ y el nombre de la funcion decoradora.
 el decorador se ejecuta en primera instancia, en cuanto 
 se ejecuta el codigo.
*/
}

let speaker: Speaker = new Speaker();

/** al momento de crar un objeto del tipo de la clase
 la cual tiene el decorador y llamr a la propiedad que creamos
 en este deocrador, el compilador se quejara, ya que al momento
 de leer el codigo, no regisra que exite la propieda que se creo
 en el decorador, y es porque estos decoradors funcionan en tiempo
 de ejecucion y por lo tanto no esta disponible esta propiedad
 hasta que ejecutemos el codigo. por ello para poder acceder a la
 propiedad que fue creada en el decorador debemos utilizar type assertions,
 para deciler al compilador que esamos seguros de que tipo es el objeto.pero
 el tipo que especifcaremos es que sea tipo any, para que no realice la validacion
 de los campos
*/
console.log((speaker as any).className);