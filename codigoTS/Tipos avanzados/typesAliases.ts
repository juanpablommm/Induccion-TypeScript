//Types alias
/** simplmente es como lo indican su nombre, un alias o apodo asignado...
 * 
 */

type numero = number;

/*en este caso creo mi variable de tipo 
numero que es el alias que asigne para un tipo number,
por lo cual mi variable edad va a tomar ese tipo */
let edad: numero = 23;

/**el pincipal fuerte del alias esta en los types intersection 
 * o types union
 */
type numberOrString = string | number;

let age: numberOrString;

age = 54;

age = "";

class User{
  private _name:string;
  constructor(name:string){
    this._name = name;
  }

  get name(){
    return this._name;
  }

  set name(name:string){
    this._name = name;
  }
}

class Admmin{
  private _permission:string;
  constructor(permission:string){
    this._permission = permission;
  }

  get permission(){
    return this._permission;
  }

  set permission(permission:string){
    this._permission = permission;
  }
}

type userAndAdmin = User & Admmin;

let userr: userAndAdmin;

/*aqui indicamos que creamos un type que seria una function que a fuerzas
nos tendra que devolver un string*/
type funString = () => string;

/**creamos una funcion que recibe por parametro el type funString que creamos,
 * donde vasiamente es que recibe una funcion que debe volver un string
 */
function executer(f: funString){
  console.log(f);
}
/**cuando llamo a la funcio especificamente que pasarle una funcion que me devuleva un string */
executer(() => "jyan");

//executer(() => 223);