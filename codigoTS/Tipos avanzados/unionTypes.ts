/*UNION  TYPES
*los tipos de union los podemos utilizar cuando queremos
que un tipo de dato sea de un tipo determinado dependiendo de la situacion:
Por ejemplo si queremos que una variable sea de tipos number o de tipo string.

*los tipos de union pueden tener mas de dos tipos.
let unionTyep: string | number;

*y podemos ejecuar sobre la varible los metodos que compartan en comun los tipos de datos.

*los union Types nos quitan las ventajas del tipado fuerte de ts*/

let unionTyep: string | number;

unionTyep = "string";

unionTyep = 23;

//metodo en comun es toString()
console.log(unionTyep.toString());


