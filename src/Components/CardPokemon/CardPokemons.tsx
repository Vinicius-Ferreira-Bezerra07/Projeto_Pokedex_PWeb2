import React from "react"
import Icon from "../IconsTypes/Icon"
import { Link } from "react-router-dom"
import './CardPokemon.css'

export default function CardPokemon({ name, type, img }) {

    console.log(img["official-artwork"]?.front_default);
    
    return (
        <Link className="link" to={'/pokemon${}'}>
            <div className="cardPokemon" >
                <div className="icons">
                    <Icon type={type[0].type.name} />
                    <Icon type={type[1]?.type.name} />
                </div>
                <img className="pokeImg" src={img["official-artwork"]?.front_default} />
                <h1 className="pokeName">{name}</h1>
            </div>
        </Link>
    )
}