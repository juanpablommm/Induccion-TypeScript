//Type Guards
let age: number | string;

/*cuando  trabajamos con unionTypes, 
no tenemos a ciencia cierta serteca de con 
que tipo de datos vamos a trabajar.
por ende es que existen los guardianes de tipo,
type guards, los cuales vienen en dos tipos:

*con funciones especiales, para realizar el type guards
con una funcion necesitamos crear una funcion que retorne
un predicado de tipo

*con el operador typeOf de js
*/

/*con funcion
lo que hace que una funcion se un guardian de tipo,
es la sintaxis del tipo que retorna.
predicado de tipo: retorna "is number"*/
function isNumber(obj: number | string): obj is number{
    return typeof obj === 'number';
}

function isString(obj: number | string): obj is string{
    return typeof obj === 'string'
}
function printAge(age: number | string) {
    /**los guardianes de tipo son tan iteligentes que 
     * con solo hacer una comparacion para un tipo, no tenemos
     * que realizarla con el segundo tipo, basta con utilizar un else
     */
    if(isNumber(age)){
        console.log(`${age} is number`);
    }else{
        console.log(age.charAt(0));
    }
}

function printAgeWithTypeOf(age: number | string) {
    /**podemos establecer guardianes de tipo de una solamanera
     * sin crear metodos para elloc on el operador typeOf,
     * esot audotomaticamente se comvertira en un guardian de tipo
     */
    if(typeof age === 'number'){
        console.log(`${age} is number`);
    }else{
        console.log(age.charAt(0));
    }
}

console.log(printAge(12));
console.log(printAgeWithTypeOf("string"));