import bug from '../../assets/Bug.png'
import dark from '../../assets/Dark.png'
import dragon from '../../assets/Dragon.png'
import eletric from '../../assets/Eletric.png'
import fairy from '../../assets/Fairy.png'
import fighting from '../../assets/Fighting.png'
import fire from '../../assets/Fire.png'
import flying from '../../assets/Flying.png'
import ghost from '../../assets/Ghost.png'
import grass from '../../assets/Grass.png'
import ground from '../../assets/Ground.png'
import ice from '../../assets/Ice.png'
import normal from '../../assets/Normal.png'
import poison from '../../assets/Poison.png'
import psychic from '../../assets/Psychic.png'
import rock from '../../assets/Rock.png'
import steel from '../../assets/Steel.png'
import water from '../../assets/Water.png'
import './Icons.css'

export default function Icon(props) {


    switch (props.type) {
        case "bug":
            return (
                <img src={bug} className="icon" />
            )
            break;
        case "dark":
            return (
                <img src={dark} className="icon" />
            )
            break;
        case "dragon":
            return (
                <img src={dragon} className="icon" />
            )
            break;
        case "eletric":
            return (
                <img src={eletric} className="icon" />
            )
            break;

        case "fairy":
            return (
                <img src={fairy} className="icon" />
            )
            break;

        case "figthing":
            return (
                <img src={figthing} className="icon" />
            )
            break;

        case "fire":
            return (
                <img src={fire} className="icon" />
            )
            break;

        case "flying":
            return (
                <img src={flying} className="icon" />
            )
            break;

        case "ghost":
            return (
                <img src={ghost} className="icon" />
            )
            break;

        case "grass":
            return (
                <img src={grass} className="icon" />
            )
            break;

        case "ground":
            return (
                <img src={ground} className="icon" />
            )
            break;

        case "ice":
            return (
                <img src={ice} className="icon" />
            )
            break;

        case "normal":
            return (
                <img src={normal} className="icon" />
            )
            break;

        case "poison":
            return (
                <img src={poison} className="icon" />
            )
            break;

        case "psychic":
            return (
                <img src={psychic} className="icon" />
            )
            break;

        case "rock":
            return (
                <img src={rock} className="icon" />
            )
            break;

        case "steel":
            return (
                <img src={steel} className="icon" />
            )
            break;

        case "water":
            return (
                <img src={water} className="icon" />
            )
            break;

        default:
            break;
    }
}