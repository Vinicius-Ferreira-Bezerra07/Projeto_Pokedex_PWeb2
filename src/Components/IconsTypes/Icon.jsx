import Bug from '../../assets/Bug.png'
import Dark from '../../assets/Dark.png'
import Dragon from '../../assets/Dragon.png'
import Eletric from '../../assets/Eletric.png'
import Fairy from '../../assets/Fairy.png'
import Figting from '../../assets/Figting.png'
import Fire from '../../assets/Fire.png'
import Flying from '../../assets/Flying.png'
import Ghost from '../../assets/Ghost.png'
import './Icons.css'

export default function Icon(type) {
    const types = ["Normal", "Figthing", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Eletric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"]
    let icone

    types.map((x) => type == x ? icone = `../../assets/${x}.png` : console.log(x))

    return (
        <img src={Bug} className="icon" />
    )
}