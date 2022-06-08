import { Pokemon } from "./Pokemon.js";
import { UI } from "./UI.js";

const limit = 4;
var offset = 0;

function fetchPokemon(url){
    const ui = new UI();
        fetch(url)
        .then(res => res.json())
        .then(json => {
            ui.addPokemonList(json.sprites.front_default, json.name, json.id)
        })
        .catch(err => console.log(err));
    
}


function fetchPokemons(){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())
    .then(json => json.results)
    .then(resultados => {
            for (let index = 0; index < resultados.length; index++) {
                fetchPokemon(resultados[index].url);
            }
    })
    .catch(err => console.log(err));
}

    function getPokeInfo(element){
        const id = element.id;
        const ui = new UI();
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(json => {
            var pokemon = new Pokemon(json);
            ui.addInformacion(pokemon);
        })
    }


    window.addEventListener("load", ()=>{
        if(offset == 0){
        fetchPokemons();
        offset+=limit;
        }
    });

    document.getElementById("Anterior").addEventListener("click", ()=>
    {
        
            const ui = new UI();
            offset-= limit;
            ui.remove(document.getElementById("pokemon-list"))
            fetchPokemons();}
    )

    document.getElementById("Siguiente").addEventListener("click",() =>{
        const ui = new UI();
        ui.remove(document.getElementById("pokemon-list"));
        fetchPokemons();
        offset+= limit;
    })
    
    document.getElementById("pokemon-list").addEventListener("click", (e) =>{
        const ui = new UI();
        ui.remove(document.getElementById("banner"));
        getPokeInfo(e.target);
    } )

