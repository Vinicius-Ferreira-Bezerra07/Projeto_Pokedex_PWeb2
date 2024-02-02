import images from '../../assets'

export default function Icon(type) {
    const types = ["Normal", "Figthing", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Eletric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"]
    let image
    const t = ".."
    
    types.map((x) => type == x? image = `../../assets/${x}.png`: console.log(x))
    
    return (
        <><img src={image} className="icon"/>
        {console.log(image)}
        <img src={t}/>
        </>
    )
}