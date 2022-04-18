document.write("<h1>this text is from script</h1>");
document.write("Have a nice day!");

let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
    let modalContainer = document.querySelector('#modal-container');

    function getAll() {
      return pokemonList;
  }
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon 
         ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }


    
    function addListItem(pokemon){
        console.log(pokemon,"addlistitem funkcio pokemon parametere");
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon  = document.createElement("li"); 
        listpokemon.classList.add(
            'list-grout-item'
        )
        
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("pokeButton-class");
        button.setAttribute('data-toggle', 'modal'); // copy
        button.setAttribute('data-target', '#pokemonModal'); //copy 
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click',function(event){
            showDetails(pokemon);
        })
    }
//CONTROLLED
    function loadList() {
        return fetch(apiUrl).then(function (response) { // promise -> response which is a promise
        return response.json(); // response to json 
        }).then(function (json) {
          json.results.forEach(function (item) { // json results os from API 
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }
    // "Promise function" fetch function
       
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
        return response.json();
        }).then(function (details) {
              // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        }).catch(function (e) {
        console.error(e);
        });
    }
 
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function()
        {
            console.log(item);
        });
      }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
      };


      
      


      
      

})();
    
pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});


 