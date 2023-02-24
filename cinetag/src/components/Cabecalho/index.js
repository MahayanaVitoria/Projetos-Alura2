import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do Cinetag"></img>
            </Link>
            <nav>
                {/* Estrutura que é montada no Cabecalho links
                <Link to={url} className={styles.Link}>
                    {children}
                </Link> */}
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>

                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>

    )
}

export default Cabecalho;