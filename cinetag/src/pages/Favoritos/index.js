import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Favoritos.module.css'

function Favoritos() {
    const { favorito } = useFavoritoContext()
    return(
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.favoritos}>
                {/* <Card id='2' titulo='Number 1' capa='https://cdn-icons-png.flaticon.com/512/8068/8068013.png'></Card> */}
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;