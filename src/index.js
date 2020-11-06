import { heroes } from './data/heroes'

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);


console.log(getHeroeById(3));
console.log(getHeroesByOwner('Marvel'));