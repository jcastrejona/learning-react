console.log("It works");

const nombre = 'Jose'
const apellido = 'Castrejon'

//const nCompleto = nombre + ' ' + apellido;
const nCompleto = `${nombre} ${apellido}`;
console.log(nCompleto);

function getSaludo(nombre){
    return `hola ` + nombre;
}

console.log(`Esto es un texto ${getSaludo(nombre)}`);