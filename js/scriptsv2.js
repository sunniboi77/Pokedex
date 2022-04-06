document.write("<h1>this text is from script</h1>");
document.write("Have a nice day!");

let PokemonRepository = (function () {
    let pokemonList = [     
        { name: "Bulbasaur", height: 0.7, types: ["grass", "poison", "fire"], },
        { name: "Eevee", height: 0.3, types: ["grass", "poison", "fire"], },
        { name: "Espeon", height: 0.9, types: ["grass", "poison", "fire"], },
        { name: "Charmander", height: 2, types: ["fire"], },
        { name: "Squirtle", height: 1, types: ["water"], },
        { name: "Caterpie", height: 1, types: ["bug"], },
        { name: "Weedle", height: 1, types: ["bug", "poison"], },
        { name: "Bulbasaur", height: 0.7, types: ["grass", "poison"], },
        { name: "Charizard",height: 1.7, types: ["fire", "flying"],},
        { name: "Squirtle", height: 1, types: ["water"],},
    ];

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }
    function getAll() {
        return pokemonList;
    }

    function showDetails(pokemon){
        console.log("showdetails function", pokemon.target.innerHTML);
    }

    function addListItem(pokemon){
        console.log(pokemon,"addlistitem funkcio pokemon parametere");
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon  = document.createElement("li"); 
        let button    = document.createElement("button");
        
        button.innerText = pokemon.name;
        button.classList.add("pokeButton-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        
        button.addEventListener('click',showDetails)
        
    }
    return{
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

PokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(PokemonRepository.getAll());

PokemonRepository.getAll().forEach(function (pokemon) {
    console.log('this is pokemon tessek', pokemon);
    PokemonRepository.addListItem(pokemon);
});


let element = document.querySelector('select');
console.log(element.value); // returns '1' as that’s currently selected
element.value = '2';

