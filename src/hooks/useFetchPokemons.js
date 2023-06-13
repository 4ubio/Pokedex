import { useState, useEffect } from "react";
import { fetchPokemon } from "../helpers/fetchPokemon";

export const useFetchPokemon = (name) => {
    
    const [pokemon, setPokemon] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getNewPokemon = async() => {
        const newPokemon = await fetchPokemon(name);
        setPokemon(newPokemon);
        setIsLoading(false);
    }

    useEffect(() => {
        getNewPokemon(); //Activate getNewPokemon()...
    }, []) //...When the hook is used

    return {
        pokemon,
        isLoading
    }
}