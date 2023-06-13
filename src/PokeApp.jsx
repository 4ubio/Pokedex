import React, { useState } from 'react'
import { AddPokemon } from './components'
import { PokemonGrid } from './components';

export const PokeApp = () => {

    //Array with searched pokemons
    const [pokemons, setPokemons] = useState([]);

    //Add new pokemon to array
    const onAddPokemon = (newPokemon) => {
        if(pokemons.includes(newPokemon)) return; //No duplicate pokemons
        setPokemons([newPokemon, ...pokemons]); //Set a new state
    }

    return (
        <>
            <h1 className='title'>Pokédex App ✨</h1>
            <h2 className='sub'>By Sebastián Rubio 🧑🏽‍💻</h2>
            
            <AddPokemon onNewPokemon={onAddPokemon}/>

            <div className='card-grid'>
                {pokemons.map //Interate all pokemons in array
                    (pokemon => (
                        <PokemonGrid key={pokemon} name={pokemon}/>
                    ))
                }
            </div>
        </>
    )
}
