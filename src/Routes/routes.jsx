import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home"
import InfoPokemon from "../Pages/infoPokemon/InfoPokemon"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/pokemon/:id' element={<InfoPokemon />} />
            </Routes>
        </BrowserRouter>
    )
}