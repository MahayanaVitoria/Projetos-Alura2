import Inicio from "./pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Favoritos from "pages/Favoritos"
import Cabecalho from "components/Cabecalho"
import Rodape from "components/Rodape"
import Container from "components/Container"
import FavoritosProvider from "components/contexto/Favoritos"

function AppRoutes() {
    return(
        <BrowserRouter>
        <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/Favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
        <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes