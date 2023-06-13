export const fetchPokemon = async(name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const url_2 = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    const resp_2 = await fetch(url_2);
    const data_2 = await resp_2.json();
    
    const pokemon = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        type1: data.types[0].type.name, 
        ability1: data.abilities[0].ability.name,
        description: data_2.flavor_text_entries[0].flavor_text
    }
    
    return pokemon;
}