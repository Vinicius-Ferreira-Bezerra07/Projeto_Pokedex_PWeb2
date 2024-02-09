import CardPokemons from '../../Components/CardPokemon/CardPokemons';
import { getAllPokemons, getPokemons } from '../../services/RequestsPokemons/Pokemons';
import './Home.css'
import { useEffect, useState } from 'react';
import  ClipLoader from "react-spinners/ClipLoader"

function Home() {
    const [allPokemons, setAllPokemons] = useState([])
    const endpoint = 10

    const getPoke = async () => {
        await getAllPokemons()
            .then(response => setAllPokemons(response))
            .catch(error => console.error(error))

        // getPokemons(endpoint, 1)
        //     .then(response => setAllPokemons(response))
        //     .catch(error => console.error(error))
    }

    useEffect(() => {
        getPoke()
    }, [])
    
    console.log(allPokemons);

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