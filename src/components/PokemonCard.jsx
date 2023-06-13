import React from 'react'

export const PokemonCard = ({id, name, sprite, type1, ability1, description}) => {
  return (
    <div className='card animate__animated animate__bounceIn'>
        <img src={sprite} alt={name} />

        <div className='card-info'>
          <p>Pokédex Nº: <span>{id}</span></p>
          <p>Name: <span>{name}</span></p>
          <p>Type 1: <span>{type1}</span></p>
          <p>Ability 1: <span>{ability1}</span></p>
          <p>{description}</p>
        </div>

    </div>
  )
}