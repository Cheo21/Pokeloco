export class UI {
  /**
   * @param {Object} Nuevo pokemon
   *
   */

  addPokemonList(imagen, nombre, id) {
  
    const pokemonList = document.getElementById("pokemon-list");
    const element = document.createElement("div");
    element.innerHTML = `
        <div class="card" style="width: 15rem;">
        <img src="${imagen}" class="card-img-top"  alt="${nombre}">
        <div class="card-body">
        <h5 class="card-title">${id} - ${nombre}</h5>
        <a href="#" class="btn btn-primary">Información</a>
        </div>
        </div>
        `;
        pokemonList.appendChild(element);
  }

  remove(padre){
      while (padre.firstChild) {
          padre.removeChild(padre.firstChild);
      }
  }

  addInformacion(pokemon){
    const banner = document.getElementById("banner");
    const element = document.createElement("div");
    element.innerHTML =`
    <div class="card" style="width: 18rem;">
        <img src="${pokemon.imagen}" class="card-img-top" alt="${pokemon.nombre}">
        <div class="card-body">
        <h5 class="card-title">${pokemon.id} - ${pokemon.nombre}</h5>
        <label for="tipos">Tipos</label>
        <ul id="tipos" class="list-group"></ul>
        <label for="habilidades">Habilidades</label>
        <ul id="habilidades" class="list-group"></ul>

        </div>
        </div>
    `
    const habilidades = document.getElementById("tipos");
    for (let index = 0; index < pokemon.habilidades.length; index++) {
      const li = document.createElement("li");
      li.textContent= pokemon.habilidades[index].ability.name;
      li.class+=" list-group-item";
      habilidades.appendChild(li);
    }

    const tipos = document.getElementById("tipos");
    for (let index = 0; index < pokemon.tipos.length; index++) {
      const li = document.createElement("li");
      li.textContent= pokemon.tipos[index].type.name;
      li.class+=" list-group-item";
      tipos.appendChild(li);
    }

    banner.appendChild(element);
  }



  
}
