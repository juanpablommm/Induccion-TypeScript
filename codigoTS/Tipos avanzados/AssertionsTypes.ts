//Type Assertions
/**basicamente es reaccinar un typo de dato 
 * a una vrable o objecto o demas para indicarle al
 * compilador que no lo va a inferir como el lo entendie
 * sino que lo enferira de acorde a como nosotros digas...
 * es como decirle a compilador "vas a tratar el tipo de este objeto 
 * de esta forma porque yo se mas del objecto que tu"
 */
interface AJAXSetting{
  url:string;
}

let options = { } as AJAXSetting
options.url = "https://api-res/productos";

console.log(options.url);