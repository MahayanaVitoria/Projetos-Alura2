import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css'

function Favoritos() {
    return(
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section style={styles.favoritos}>
                <Card id='2' titulo='Number 1' capa="https://cdn-icons-png.flaticon.com/512/8068/8068013.png"></Card>
            </section>
        </>
    )
}

export default Favoritos;