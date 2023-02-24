import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos"

export default function FavoritosProvider({children}) {
    const [favorito, setFavorito] = useState([]);

    return(
        <FavoritosContext.Provider
        value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {

        // procurando na lista de favoritos se o id do item que voce esta tentando adicionar ja existe nessa lista
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        // nova lista que recebe a lista antiga
        let novaLista = [...favorito];

        //se nao for repetido, ira acrescentar na nova lista 
        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }
}