import React from "react"
import Icon from "../IconsTypes/Icon"
import { Link } from "react-router-dom"
import './CardPokemon.css'

export default function CardPokemon({ name, type, img }) {

    console.log(img.official_artwork);
    
    return (
        <Link to={'/pokemon${}'}>
            <div className="cardPokemon" >
                <Icon type={type[0].type.name} />
                <img className="pokeImg" src={img} />
                <h1 className="pokeName">{name}</h1>
            </div>
        </Link>
    )
}