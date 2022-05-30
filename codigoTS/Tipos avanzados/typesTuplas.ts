/*TUPLAS
*las tuplas vienen siendo un arreglo pero con las particularidad
de que los tipoes de las dos primeras pociciones del
arreglo son especificadas por nonostros, y las siguientes a estas
son union types

el primero y el segundo elemento tiene que ser un string
y un number*/
let myTupla:[string, number];

myTupla = ["juan pablo", 3];//una vez inicilizada por asi decirlo la tupla podemos agregar elemtos con push
/**sieguente pocicion a la que no esta definidad el tipo recibe un type union  string | number*/
myTupla.push("wq");
myTupla.push(12);
myTupla.push("wq", 122);
console.log(myTupla);

/**la diferencia entre un arreglo y una tupla en ts,
 * es que los arreglos almancenan un solo tipo de dato y 
 * las tuplas pueden alamaenar mas de un tipo
 */

/**podemos armar una tupla de matrices */
var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employee);

/*ahora nosotro podemos acceder a los elementos de una tupla mediante su indice */
console.log(`este es el primer elemento de la tupla de matrices ${employee[1]}`);