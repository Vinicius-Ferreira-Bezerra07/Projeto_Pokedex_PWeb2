import CardPokemons from '../../Components/CardPokemon/CardPokemons';
import { getPokemons } from '../../services/RequestsPokemons/Pokemons';
import './Home.css'
import { useEffect, useState } from 'react';
import  ClipLoader from "react-spinners/ClipLoader"

function Home() {
    const [allPokemons, setAllPokemons] = useState([])
    const endpoint = 10

    useEffect(() => {
        getPokemons(endpoint, 1)
            .then(response => setAllPokemons(response))
            .catch(error => console.error(error))
    }, [])
    
    // console.log(allPokemons);

    return (
        <div className="homePage">
            { allPokemons != undefined ?
                <CardPokemons
                    name={"venusaur"}
                    // pokemons={allPokemons[1].name}
                />
            : <ClipLoader/>
            }
        </div>
    )
}

export default Home;