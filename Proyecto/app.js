//import { Pokemon } from "./Pokemon";
import { UI } from "./UI";

const limit = 11;
var offset = 0;





function fetchPokemon(arrayPokemon){
    const ui = new UI();
    for (let index = 0; index < arrayPokemon.length; index++) {
        fetch(arrayPokemon[index].url)
        .then(res => res.json())
        .then(json => {
            ui.addPokemonList(json.sprites.front_default, json.name, json.id)
        })
        .catch(err => console.log(err));
    }
}


function fetchPokemons(){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())
    .then(json => json.results)
    .then(resultados => {
        fetchPokemon(resultados)
    })
}




    window.addEventListener("load", ()=>{
        if(offset == 0){
        fetchPokemons();
        offset+=(limit+1);
        }
    });

    document.getElementById("Anterior").addEventListener("click", ()=>
    {
        offset-= (limit+1);
        fetchPokemon();
    })

    document.getElementById("Siguiente").addEventListener("click",() =>{
        offset+= (limit+1);
        fetchPokemon();
    })




    
    document.getElementById("pokemon-list").addEventListener("click", (e) =>{
        const ui = new UI();
        ui.remove(document.getElementById("banner"));
        
    } )
    










