import React from "react"
import Icon from "../IconsTypes/Icon"
import './CardPokemon.css'
import { useEffect, useState } from "react"
import { getPokemonByName } from "../../services/RequestsPokemons/Pokemons"

export default function CardPokemon({ name, type, img }) {
    const [pokemon, setPokemon] = useState(["venosaur"])

    useEffect(() => {
        // getPokemonByName(name)
        //     .then(response => setPokemon(response))
        //     .catch(error => console.error(error))
    }, [])

    // console.log(pokemon);
    // console.log(pokemon.types[0].tipe.name);

    return (
        <>
            <div className="cardPokemon">
                <Icon type={type} />
                <img className="pokeImg" src={img} />
                <h1>{name}</h1>
            </div>
        </>
    )
}