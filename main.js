import { getKeres } from "./async.js";
console.log("1. üzenet");
getKeres("adatok.json", megjelenit1);
console.log("2. üzenet");

//getKeres("https://www.boredapi.com/api/activity", megjelenitBored);
getKeres("https://pokeapi.co/api/v2/pokemon/eevee", megjelenitPokemon);
function megjelenit1(data) {
  console.log(data);
}

//function megjelenitBored(data) {
//$("body").append(`<h2>Tevékenység: ${data.activity}</h2>`);
//$("body").append(`<p>minimum: ${data.participants}</p>`);
//$("body").append(`<p>Tevékenység: ${data.type}</p>`);
//}
function megjelenitPokemon(data) {
  $("body").append(`<h1>Pokemon</h1>`);
  $("body").append(`<h2>Név: ${data.name}</h2>`);
  $("body").append(`<img src="${data.sprites.front_default}" alt="Eevee">`);
  $("body").append(`<img src="${data.sprites.front_shiny}" alt="Eevee">`);
}
