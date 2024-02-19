import CardPokemons from '../../Components/CardPokemon/CardPokemons';
import NavBar from '../../Components/NavBar/NavBar'
import { getAllPokemons, getPokemons } from '../../services/RequestsPokemons/Pokemons';
import './Home.css'
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader"

function Home() {
    const [allPokemons, setAllPokemons] = useState([])
    const endpoint = 10

    const getPoke = async () => {
        // await getAllPokemons()
        //     .then(response => setAllPokemons(response))
        //     .catch(error => console.error(error))

        getPokemons(endpoint, 1)
            .then(response => setAllPokemons(response))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        // let listPokemon = []
        // for (let i = 0; i < 10; i++) {
        //     listPokemon[i] = { index: i, nome: "venosaur", tipo: "grass", urlImagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" }
        // }
        // setAllPokemons(listPokemon)
        getPoke()
    }, [])

    console.log(allPokemons);    

    return (
        <div className="homePage">
            <NavBar />
            {allPokemons.length > 0 ?
                allPokemons.map(poke => (
                    <CardPokemons
                        key={poke.order}
                        name={poke.name}
                        type={poke.types}
                        img={poke.sprites.other}
                    />
                ))
                : <ClipLoader />
            }
        </div>
    )
}

export default Home;