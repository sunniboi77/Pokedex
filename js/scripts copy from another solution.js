//  IIFE
let pokemonRepository = ( function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    let modalContainer = document.querySelector('#modal-container');

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    //  Shows loading message by removing 'hidden'
    function showLoadingMessage() {
        let loadingMessage = document.querySelector('.loading-pokedex')
        loadingMessage.classList.remove('hidden')
    }

    //  Hides loading message by adding "hidden"
    function hideLoadingMessage() {
        let loadingMessage = document.querySelector('.loading-pokedex')
        loadingMessage.classList.add('hidden')
    }

    function addListItem(pokemon) {
        // Setting a list of variables
        let pokedexList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        listPokemon.classList.add(
            'list-group-item', 
            'col-sm-12', 
            'col-md-6', 
            'col-lg-4',
            'py-2', 
            'text-center', 
            'list-group-item-action'
            );
        listPokemon.setAttribute('style','border-style: none;')
        let button = document.createElement('button');

        // Button text and styling
        button.innerText = pokemon.name ;
        button.classList.add('btn');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#pokemonModal');


        // Append list and button
        listPokemon.appendChild(button);
        pokedexList.appendChild(listPokemon);

        // Event listener - click on button - shows pokemon details
        button.addEventListener('click', function(){
            showDetails(pokemon);
        });
    }
    // Show detials function
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function (){
            showModal(pokemon);
        });
    }

    // Load List function
    function loadList () {
        showLoadingMessage();

        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add (pokemon);
                hideLoadingMessage();
            });
        }).catch(function (e) {
            console.log(e);
            hideLoadingMessage();
        });
    }

    // Load Details function
    function loadDetails(item) {
        showLoadingMessage();

        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types;
            hideLoadingMessage();
        }).catch(function (e) {
            console.error(e);
            hideLoadingMessage();
        });
    }
//CONTROLLED 

    //  function to show modal
    function showModal(pokemon) {
        let modalHeader = $('.modal-header');
        let modalTitle = $('.modal-title');
        let modalBody = $('.modal-body');

        modalTitle.empty();
        modalBody.empty();
        
        let text = pokemon.name;
        let titleElement = (document.innerText = text);

        let heightElement = document.createElement('p');
        heightElement.innerText = 'Height: ' + pokemon.height;

        let weightElement = document.createElement('p');
        weightElement.innerText = 'Height: ' + pokemon.weight;

        let typeElement = document.createElement('p');
        typeElement.innerText = 'Types: ';

        pokemon.types.forEach((type, numberOfTypes) => {
            numberOfTypes = pokemon.types.pokemon; 
            
            if (numberOfTypes === 1) {
                typeElement.innerText += type.type.name;
            } else {
                typeElement.innerText += type.type.name + " ";
            }
        })

        let imageElement = document.createElement('img');
        imageElement.classList.add('modal-image');
        imageElement.src = pokemon.imageUrl;

        modalTitle.append(titleElement);
        modalBody.append(imageElement);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typeElement);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

//  Show all 151 pokemon using API
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach( function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    });     
});