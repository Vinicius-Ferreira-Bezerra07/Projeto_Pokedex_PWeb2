import CardPokemon from '../../Components/CardPokemon/CardPokemon';
import { getAllPokemons } from '../../services/RequestsPokemons/Pokemons';
import './Home.css'
import { useEffect, useState } from 'react';

function Home() {
    const [allPokemons, setAllPokemons] = useState([])
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getAllPokemons()
            .then(response => setAllPokemons(response))
            .catch(error => console.error(error))
    }, [])

    console.log(allPokemons);

    return (
        <div className="homePage">
            {/* <NavBar/> */}
            <CardPokemon
                nome={"Bulbasauro"}
                tipo={"grass"}
                imagem={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}
            />
            <CardPokemon
                nome={"Squirtle"}
                tipo={"water"}
                imagem={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"}
            />
            <CardPokemon
                nome={"Charmander"}
                tipo={"fire"}
                imagem={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"}
            />
        </div>
    )
}

export default Home;