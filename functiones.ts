//Funciones

/*podemos crearlas de ls mismas dos maneras
que en javaScrip, con function o con las 
sintaxis de felca, pueden tener
nombres o ser anonimas de igual manera.

*el principal cambio esta en la declaracion
de los tipos*/

/*function suma(v1, v2){
    return v1 + v2;
}
*/
 
 /* tenemos que especificar el tipo de los 
 paraametros y el tipo de retorno de sernecesario 
 en la function*/
 function suma(v1: number, v2: number) :number{
     return v1 + v2;
 }

suma(4, 6);

/*podemos especificar que un parametro de la function
se opcional como un simbolo de intergocacion ? al final
del nombre que le demos al parametro, pero debemos
tener en cuenta que el parametro opcional
siempre debe de ser le parametro final que recibe
la funcion, no puede ir en otra posicion que no sea 
la final, 
Con un parametro opcional cuando llamemos la funcion,
podremos darle o no ese argumento a la funcion*/

function concatenar(nombre: string, algo?: string): string{
    return nombre + algo;
}

concatenar("juan pablo");
concatenar("jhoyny bravo", "el bravo");

//Tipo de retorno de una funcion
/* para el tipo de retorno que puede hacer una funcion, podemos
especiciar con dos punto despues de los parentesis el tipo de dato,
o tambien tenemo dos tipos mas de retorno como son:

*void: al igual que en Java nosotro en typeScript tenemos el tipo void 
cuando una funcion no devuelve nada, con la unica diferencia que en typeScript
podemos hacer un retorno a un metodo que tenga especificado tipo void, 
pero el retorno sera o de tipo null, undefined, pero para las ultimas especificanes
de typeScrip ya no es posrible con null, solo undefined*/

function conVoid(): void{
    return undefined;
}

/*
*never: este es otro tipo de dato que puede retornar una funcion, pero 
se utiliza cuando tenemos una funcion que nunca termina, esto 
puede sucer cuando obviamente la funcion alla dentrado en un bucle infinito, o
o cuando alla ocurrido una exception */

/*function conNever(): never{
    
}
*/
/*let adition = (v1, v2) => v1 + v2;*/