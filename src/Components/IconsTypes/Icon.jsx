import { Bug, Dark, Dragon, Eletric, Fairy, Figthing, Fire, Flying, Ghost,} from '../../assets'

export default function Icon(type) {
    const types = ["Normal", "Figthing", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Eletric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"]
    let image
    const t = ".."
    
    types.map((x) => type == x? image = `../../assets/${x}.png`: console.log(x))
    {console.log(image)}
    
    return (
        <img src={image} className="icon"/>
    )
}