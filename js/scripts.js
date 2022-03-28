


// document.write("<h1>Hello World</h1>");
// document.write("Have a nice day!");

let pokemonList =    [
        { name: "Bulbasaur", height: 7, types: ['grass', 'poison', 'fire'] },
        { name: "Eevee", height: 0.3, types: ['grass', 'poison', 'fire'] },
        { name: "Espeon", height: 0.9, types: ['grass', 'poison', 'fire'] },
        { name: "Charmander", height: 2, types: ["fire"] },
        { name: "Squirtle", height: 1, types: ["water"] },
        { name: "Caterpie", height: 1, types: ["bug"] },
        { name: "Weedle", height: 1, ypes: ["bug", "poison"] }
    ];
    

//to write in the console Pokemonlist with Objectkeys
Object.keys(pokemonList).forEach(function(property){
      console.log(pokemonList[property]);
});


//const biggie = document.querySelector('.biggie');

for (let i=0; i < pokemonList.length ;i++) {
    if ( (pokemonList[i].height > 1.5 ) ) {
        document.writeln("<p class=biggie>", pokemonList[i].name, ' height is BIGGER than ',pokemonList[i].height , '<\p>');    
    }
    else {
         document.writeln("<p>", pokemonList[i].name, ' height is  ',pokemonList[i].height , '<\p>');    
     
    }
}
 
