import React, { useState } from 'react'

export const AddPokemon = ({onNewPokemon}) => {

    const [inputValue, setInputValue] = useState('')

    //Update input value
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    //Register new pokemon when user click submit
    const onSubmit = (event) => {
        event.preventDefault(); //Prevent refresh
        if (inputValue.trim().length <= 1) return; //Prevent short values
        onNewPokemon(inputValue.toLowerCase().trim()); //API only works with lowercase
        setInputValue(''); 
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder='Search Pokémon'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
