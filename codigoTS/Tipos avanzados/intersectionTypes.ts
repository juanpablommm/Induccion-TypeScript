/*
 *Intersection types

  estos basicmaente nos permiten combinar dos tipos de datos 
  en una sola variable
 */

class User{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    
}

class Admin{
    permissions: number;
    constructor(permissions: number){
        this.permissions = permissions;
    }
}

/**el objecto de tipo insercion, de dos tipos,
 * tiene las cracteristicas tanto de un objecto como el otro,
 * el tipo de la varible quedaria de esta forma Object1&Object2.
 * 
 * cuando creamos una variabel del con la interseccion de tipos,
 * tenemos que crear un obejcto que por obligacion tendra que inicilizar
 * todos los atributos de cada clase
 */
let userAdmin: User & Admin;

userAdmin = {
    name: 'junas',
    permissions :12,
};
console.log(`${userAdmin.name} con  ${userAdmin.permissions}`);