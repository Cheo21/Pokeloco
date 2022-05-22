export class Pokemon{
    /**
     * 
     * @param{string} nombre del pokemon
     * @param{integer} numero de id
     * @param{Object} habilidades
     * @param{Object} tipos
     * @param{String} Url del sprite
     */
    constructor(json){
        this.name= json.name;
        this.id= json.id;
        this.habilidades = json.abilities;
        this.tipos= json.types;
        this.imagen = json.sprites.front_default;
    }
    
}