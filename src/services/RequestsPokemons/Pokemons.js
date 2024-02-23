import axios from "axios"

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

export async function getAllPokemons() {
    return api.get('/pokemon?limit=151&offset=0').then(response => response.data.results);
}

export function getPokemons(limit, offset) {
    let linkList = []
    for (let i = offset; i <= limit; i++) {
        linkList.push(`/pokemon/${i}/`)
    }
    return axios.all(linkList.map(link => api.get(link))).then(response => response.map(res => res.data))
}

export function getPokemonByID(id) {
    return api.get(`/pokemon/${id}/`).then((response => response.data))
}

export function getPokemonByName(name) {
    return api.get(`/pokemon/${name}/`).then((response => response.data))
}

export function getMoves(props) {
    return axios.all(props.props.map(item => axios.get(item.move.url))).then(response => response)
}

export default function getSpecie(url) {
    // https://pokeapi.co/api/v2/pokemon-species/5/
    console.log(url.substring(45, 46));
    // const idSpecie = url.substring(45,46)
}