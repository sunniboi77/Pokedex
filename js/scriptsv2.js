

// document.write("<h1>Hello World</h1>");
// document.write("Have a nice day!");

let PokemonRepository = (function () {
    let pokemonList = [     
        { name: "Bulbasaur", height: 7, types: ['grass', 'poison', 'fire']},
        { name: "Eevee", height: 0.3, types: ['grass', 'poison', 'fire'] },
        { name: "Espeon", height: 0.9, types: ['grass', 'poison', 'fire'] },
        { name: "Charmander", height: 2, types: ["fire"] },
        { name: "Squirtle", height: 1, types: ["water"] },
        { name: "Caterpie", height: 1, types: ["bug"] },
        { name: "Weedle", height: 1, types: ["bug", "poison"] },
    ]

    function add(pokemon){
        pokemonList.push(pokemon);
    }

    function getAll(){
        return pokemonList;
    }
  
    return{
        add, getAll
    }

}) ();


let obj1 = PokemonRepository.getAll();

PokemonRepository.add({ name: "Weedle2", height: 1, types: ["bug", "poison"] });
PokemonRepository.add({ name: "Weedle3", height: 1, types: ["bug", "poison"] });

console.log(typeof(obj1)); // object

console.log(obj1); 

// Loop to list all the pokemons on the page
PokemonRepository.getAll().forEach (function(pokemon) {
    // Conditional format if Pokemon size is over 1.5
	if (pokemon.height > 1.5) {
		document.write("<p class=biggie>" + "Name: " + pokemon.name + " (Height: " + pokemon.height + ". Types: " + pokemon.types + ".)"+ "</p>");
	} 
    else {
    document.write("<p>"+ "Name: " + pokemon.name + " (Height: " + pokemon.height + ". Types: " + pokemon.types + ".)"+"</p>");
    }
	document.write("<br>");
});
	
 