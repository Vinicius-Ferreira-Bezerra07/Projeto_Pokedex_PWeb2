import CardPokemon from '../../Components/CardPokemon/CardPokemon';
import './Home.css'
import { useState } from 'react';

function Home() {
    const [pokemons, setPokemons] = useState([])

    // useState(){
    //     setPokemons(busbarPokemon())
    // } []

    return (
        <div className="homePage">
            {/* <NavBar/> */}
            <CardPokemon
            nome={"bulbasauro"}
            tipo={"grass"}
            imagem={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}
            />
        </div>
    )
}

export default Home;