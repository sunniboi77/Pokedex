


document.write("<h1>Hello World</h1>");
document.write("Have a nice day!");

let pokemonList = [
    { name: "Bulbasaur", height: 7, types: ['grass', 'poison', 'fire'] },
    { name: "Eevee", height: 0.3, types: ['grass', 'poison', 'fire'] },
    { name: "Espeon", height: 0.9, types: ['grass', 'poison', 'fire'] },
    { name: "Charmander", height: 2, types: ["fire"] },
    { name: "Squirtle", height: 1, types: ["water"] },
    { name: "Caterpie", height: 1, types: ["bug"] },
    { name: "Weedle", height: 1, ypes: ["bug", "poison"] }
];

const biggie = document.querySelector('.biggie');

for (let i=0; i < pokemonList.length ;i++) {
    if ( (pokemonList[i].height > 1.5 ) ) {
        document.writeln("<p class=biggie>", pokemonList[i].name, ' height is BIGGER than ',pokemonList[i].height , '<\p>');    
    }
    else {
        document.writeln("<p>", pokemonList[i].name, ' height is  ',pokemonList[i].height , '<\p>');    
     
    }
}
 


/* NEXT EXERCISE CODE 
// Loop to list all the pokemons on the page

	// Defining getAll function to return pokemonList
	function getAll () {
		return pokemonList;
	}

	// Defining add function to add to pokemonList
	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	// Returning getAll and add functions
	return {
		getAll: getAll,
		add: add
	}

*/

 

/*

'<p>','This is a BIG one',pokemonList[i].name,' height is    ',pokemonList[i]height,'</p>'
for (let i=0; i < pokemonList.length ;i++) {
    if (pokemonList[i].height === ) {
        document.writeln('<p>','This is a BIG one',pokemonList[i].name,' height is    ',pokemonList[i]height,'</p>');
    } else {
        document.writeln('<p>', pokemonList[i].name,' height is    ',pokemonList[i].height,'</p>');
    }
}
*/

