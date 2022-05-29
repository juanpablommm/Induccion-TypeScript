/*NameSpaces
*los nombres de espacios son unconcepto que nos permite
agrupar identificadores abjo el mismo nombre,
enetendiendose por identificadores clases, interfaces, constantes etc, 
*Tienen como objetivo que dos librerias si utilicen nombres de clases diferentes,
es decir que si tenemos una clase con el mimso nombre que otra que tengasmos en un libreria
no occurran choques, ni unsa sobre-escriba a la otra.
para eso empleamos los nombres de espacio o NameSpaces.

para esot requiere la palbra reservada NameSpace el nombre que queramos apra esta,
seguida por las llaves para establcer el bloque de codigo,
dentro de ellas vamos a colocar las clases, contantes o demas que queramos exportar 
al NameSpace*/

namespace MyNameSpace{

    /*para que lo que declaremos dentro del nameSpace, se visibble desde
    a fuera necesitamos utilizar la palabra clave export, de lo contrario
    no se podra utilizar desde afuera*/

    export class MyClase{}
    export const url: string = "https://localhost/8080"
    const privado: string = "123"; //no puede ser acedido desde afuera del nameSpace
}

//estoy creando un objecto de dipo de la clase que esta en el nameSpace
let miClase: MyNameSpace.MyClase = new MyNameSpace.MyClase();
