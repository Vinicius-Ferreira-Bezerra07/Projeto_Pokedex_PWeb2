import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { getPokemonByID } from "../../services/RequestsPokemons/Pokemons";
import ClipLoader from "react-spinners/ClipLoader"
import Move from '../../Components/Moves/Move'
import Evolutions from '../../Components/Evolutions/Evolutions'
import './infoPokemon.css'

export default function infoPokemon(props) {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        getPokemonByID(id)
            .then(response => setPokemon(response))
            .catch(error => console.error(error))
    }, [])

    // console.log(pokemon?.moves[0].move.name)

    return (
        <>
            <NavBar />
            {pokemon != undefined ? (
                <div className="infoPoke">
                    <h1 className="pokeName" >{pokemon?.name}</h1>
                    <img className="pokeImg" src={pokemon?.sprites.other["official-artwork"].front_default} />
                    <div className="moves">
                        {pokemon?.moves.map(poke => (
                            <Move move={poke}/>
                        ))}
                    </div>
                    <div className="evolutions">
                        <Evolutions specie={pokemon?.species}/>
                    </div>

                </div>
            ) :
                <ClipLoader />
            }
        </>
    )
}