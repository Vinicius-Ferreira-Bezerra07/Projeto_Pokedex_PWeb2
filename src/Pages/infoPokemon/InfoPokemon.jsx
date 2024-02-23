import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { getPokemonByName } from "../../services/RequestsPokemons/Pokemons";
import ClipLoader from "react-spinners/ClipLoader"
import Move from '../../Components/Moves/Move'
import Evolutions from '../../Components/Evolutions/Evolutions'
import './infoPokemon.css'

export default function infoPokemon(props) {
    const { pokeName } = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        getPokemonByName(pokeName)
            .then(response => setPokemon(response))
            .catch(error => console.error(error))
    }, [])

    console.log(pokemon?.species)

    return (
        <>
            <NavBar />
            {pokemon != undefined ? (
                <div className="infoPoke">
                    <h1 className="pokeName" >{pokemon?.name}</h1>
                    <img className="pokeImg" src={pokemon?.sprites.other["official-artwork"].front_default} />
                    <div className="moves">
                        {pokemon?.moves.map(poke => (
                            <Move key={poke.move.name} move={poke} />
                        ))}
                    </div>
                    <div className="evolutions">
                        <Evolutions specie={pokemon?.species} />
                    </div>

                </div>
            ) :
                <ClipLoader />
            }
        </>
    )
}