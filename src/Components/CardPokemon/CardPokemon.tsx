import React from "react"
import Icon from "../IconsTypes/Icon"
import IconGrass from "../IconsTypes/IconGrass"
import './CardPokemon.css'

export default function CardPokemon(props) {
    return (
        <div className="cardPokemon">
            {/* <IconGrass/> */}
            <img className="pokeImg" src={props.imagem} />
            <h1>{props.nome}</h1>
            <Icon type={props.tipo} />
        </div>
    )
}