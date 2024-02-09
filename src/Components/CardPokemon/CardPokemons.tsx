import React from "react"
import Icon from "../IconsTypes/Icon"
import IconGrass from "../IconsTypes/IconGrass"
import './CardPokemon.css'
import { useEffect, useState } from "react"
import { getPokemonByName } from "../../services/RequestsPokemons/Pokemons"

export default function CardPokemon({name}) {
    const [pokemon, setPokemon] = useState(["venosaur"])

    useEffect(() => {
        getPokemonByName(name)
            .then(response => setPokemon(response))
            .catch(error => console.error(error))
    }, [])

    // console.log(pokemon);
    console.log(pokemon.types[0].tipe.name);
    
    return (
        <>
            <div className="cardPokemon">
                <Icon type={pokemon.types[0].tipe.nome} />
                <img className="pokeImg" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"} />
                <h1>{name}</h1>
            </div>
        </>
    )
}