const persona = {
    id: '42',
    nombre: 'Tony',
    apellido: 'Stark',
    rango: 'Capitan',
    ubicacion: {
        lat: 23.222222,
        lng: -17.111111
    }
};

//const { id, nombre, apellido } = persona;

const useContext = ({id, nombre, apellido, rango = 'teniente', ubicacion}) => {
    return {
        idPersona: id,
        rango: rango,
        ubicacion: ubicacion
    }
};

const {idPersona, rango, ubicacion: {lat, lng}} = useContext(persona);

console.log(idPersona, rango);
console.log(lat, lng);
