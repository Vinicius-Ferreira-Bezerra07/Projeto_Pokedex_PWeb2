import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import './infoPokemon.css'
import { useEffect, useState } from "react";
import { getPokemonByID } from "../../services/RequestsPokemons/Pokemons";

export default function infoPokemon(props) {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        getPokemonByID(id)
            .then(response => setPokemon(response))
            .catch(error => console.error())
    }, [])

    console.log(pokemon);

    return (
        <>
            <NavBar />
            <div className="infoPoke">
                <img src={pokemon.sprites.other["official-artwork"]?.dream_world} />
            </div>
        </>
    )
}