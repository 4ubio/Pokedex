import React from 'react'

export const PokemonCard = ({id, name, sprite, type1, type2, ability1, ability2, description}) => {
  return (
    <div className='card animate__animated animate__bounceIn'>
        <img src={sprite} alt={name} />

        <div className='card-info'>
          <p>Pokédex Nº: <span>{id}</span></p>
          <p>Name: <span>{name}</span></p>
          <p>Type 1: <span>{type1}</span></p>
          <p>Type 2: <span>{type2}</span></p>
          <p>Ability 1: <span>{ability1}</span></p>
          <p>Ability 2: <span>{ability2}</span></p>
          <p>{description}</p>
        </div>

    </div>
  )
}