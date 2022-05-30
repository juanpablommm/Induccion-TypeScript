/**
 * ENUMS
 * 
 * los enums son un caracteristica propia que agrego TypeScript,
 al igual que en java permiten que definamos un grupo de constantes 
 con un nombre. Estas pueden ser tanto numericas como de cadena
 
 *para definir un enum al igual que en java solo basta escribir la
 palabra clave enum

 *Enums numericos: 
 *podemos establcer el numero que guardaremos en cada constante.
 *podemos establcer que la enumecacion de haga de forma tuomatica
 ya se iniciando desde el numero que queramos o completamente solo
 desde 0*/

  enum Marcas{
      Nike = 23,
      Adidas = 34,
      Puma = 56
  }

  console.log(`Nike es igual a ${Marcas.Nike}, Adidas es ${Marcas.Adidas}`);

  enum Categorias{
      Categoria1,
      Categoria2,
      Categoria3
  }

  console.log(`categoria 1 es ${Categorias.Categoria1}, categoria 2 es ${Categorias.Categoria2}, categoria 3 es ${Categorias.Categoria3}`);

  /**enums de cadenas 
   *las enumeracion de tipo string, no tienen ninguna forma de inicilizarce 
   de forma automatica como pasa con las numericas, por lo que cada constante
   dentro del enum debe ser asignada por un valor de cadena.
  */

   enum Celula{
       Arquitecto = "Jhony Bravo",
       FullStack = "yolo el pololo"
   }

   console.log(`el arquitecto de la celula es ${Celula.Arquitecto}, el full stack es ${Celula.FullStack}`);;