import { Link } from 'react-router-dom';
import claquete from './claquete.webp'
import styles from './Cabecalho.module.css'
import CabecalhoLink from 'components/CabecalhoLink';

function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={claquete} alt="Logo Claquete"></img>
            </Link>
            <CabecalhoLink url="./">
                Home
            </CabecalhoLink>
            <CabecalhoLink url="./Favoritos">
                Favoritos
            </CabecalhoLink>
        </header>
    )

}

export default Cabecalho;