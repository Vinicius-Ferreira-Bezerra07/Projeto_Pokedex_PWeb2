import React from "react"
import Icon from "../IconsTypes/Icon"
import { Link } from "react-router-dom"
import './CardPokemon.css'

export default function CardPokemon({ name, type, img }) {

    console.log(img["official-artwork"]?.front_default);
    
    return (
        <Link to={'/pokemon${}'}>
            <div className="cardPokemon" >
                <Icon type={type[0].type.name} />
                <img className="pokeImg" src={img["official-artwork"]?.front_default} />
                <h1 className="pokeName">{name}</h1>
            </div>
        </Link>
    )
}