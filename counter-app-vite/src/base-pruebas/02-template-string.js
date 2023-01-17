




export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = "Alberth";

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );