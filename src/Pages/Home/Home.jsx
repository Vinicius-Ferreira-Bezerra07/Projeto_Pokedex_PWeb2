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
            <CardPokemon
                nome={"Squirtle"}
                tipo={"Woter"}
                imagem={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"}
            />
            <CardPokemon
                nome={"Charmander"}
                tipo={"fire"}
                imagem={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"}
            />
        </div>
    )
}

export default Home;