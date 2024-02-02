import React from "react"
import Icon from "../IconsTypes/Icon"
import IconGrass from "../IconsTypes/IconGrass"

export default function CardPokemon(props){
    return (
        <div className="cardPokemon">
            <h1>{props.nome}</h1>
            <img src={props.imagem}/>
            {/* <Icon type={props.tipo}/> */}
            <IconGrass/>
        </div>
    )
}