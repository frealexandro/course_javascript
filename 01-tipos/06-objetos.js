//Personaje de netflix
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre : "Tanjiro",
    anime : "Demon slayer" ,
    edad : 16 , 
};
console.log(personaje);

console.log(personaje.nombre); // first method
console.log(personaje['anime']);// second method

personaje.edad = 13;

personaje['edad'] = 16;

delete personaje.anime;

console.log(personaje);