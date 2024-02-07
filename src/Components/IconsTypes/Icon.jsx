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

export default function Icon(type) {

    console.log(dark);

    switch (type) {
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
        default:
            break;
    }
}