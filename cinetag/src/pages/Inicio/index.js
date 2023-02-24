import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";
import styles from './Inicio.module.css'

function Inicio() {
    const [videos, setVideo] = useState([])

    //consumir da api my json server
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/MahayanaVitoria/cinetag-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(dados)
            })
            // os [] vazios são para ele fazer a requisição somente uma vez
    }, [])
    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}> 
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;