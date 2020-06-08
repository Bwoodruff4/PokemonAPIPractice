import React from 'react'

export default function PokemonList({ pokemons }){

    state = {

    }

    let getPokemonInfo = (url) => {
        let pokemonSprite;

        fetch(url)
        .then(response => response.json())
        .then(pokemonInfo => pokemonSprite = pokemonInfo.sprites.front_default)
    }

    const eachPokemon = () => pokemons.map(pokemon => (
        <li className="pokemon-item">
            <h2>{pokemon.name}</h2>
            <img src={getPokemonInfo(pokemon.url)}/>
        </li>

    ))
    return(
        <ul className="pokemon-list">
            {eachPokemon()}
        </ul>
    )
}