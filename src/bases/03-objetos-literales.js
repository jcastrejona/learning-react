console.log('It works');

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:  {
        ciudad: 'New York',
        zip: '45050',
        lat: '12.111111',
        lng: '32.111111',
    }
};



const persona2 = {...persona};
persona2.nombre = 'Peter';
persona2.direccion.ciudad = 'Texas';

console.log(persona);
console.log(persona2);
