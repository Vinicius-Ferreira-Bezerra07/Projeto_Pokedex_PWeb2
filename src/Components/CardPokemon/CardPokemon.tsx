import React from "react"
import Icon from "../IconsTypes/Icon"

export default function CardPokemon(props){
    return (
        <div className="cardPokemon">
            <h1>{props.nome}</h1>
            <img src={props.imagem}/>
            <Icon type={props.tipo}/>
        </div>
    )
}