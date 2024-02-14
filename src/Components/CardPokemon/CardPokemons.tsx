import React from "react"
import Icon from "../IconsTypes/Icon"
import { Link } from "react-router-dom"
import './CardPokemon.css'

export default function CardPokemon({ name, type, img }) {

    return (
        <Link to={'/pokemon${}'}>
            <div className="cardPokemon" >
                <Icon type={type} />
                <img className="pokeImg" src={img} />
                <h1 className="pokeName">{name}</h1>
            </div>
        </Link>
    )
}