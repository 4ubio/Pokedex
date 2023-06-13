import React from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemons';
import { PokemonCard } from './PokemonCard';

export const PokemonGrid = ({name}) => {

    //Our custom hook
    const {pokemon, isLoading} = useFetchPokemon(name);

    return (
        <>                
            {/*Display or not "loading" */}
            {isLoading && (<h2 className='animate__animated animate__bounceIn'>Loading...⌛️</h2>)}

            <PokemonCard 
                {...pokemon} //Send all properties to our component
            /> 
        </>
    )
}