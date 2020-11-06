const saludar = function(nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar("Pedro"));
console.log(saludar2("Juan"));
console.log(saludar3("Pepe"));

/* const getUser = function(){
    return{
        uid: 'ABC123',
        usernmae: 'soyuz123'
    }
} */

const getUser = () => ({
    uid: 'ABC123',
    usernmae: 'soyuz123'
})

const getActiveUser = (nombre) =>({
    uid: 'ABC123',
    usaername: nombre
});
const user = getUser();

console.log(user);

const activeUsr = getActiveUser('Juanito');

console.log(activeUsr);