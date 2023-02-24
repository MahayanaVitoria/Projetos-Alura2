import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css'
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] =useState()
    // pega o parâmetro da url
    const parametros = useParams();
    // // pega a lista de videos e procura qual video tem o id igual ao parâmetro passado na url
    // const video = videos.find((video) => {
    //     return video.id === Number(parametros.id)
    // })

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/MahayanaVitoria/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    //se nao tiver o id do video ele retorna a página não encontrada
    if (!video) {
        return <NaoEncontrada/>
    }

    return(
        <>
            <Banner imagem="player"></Banner>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.titulo} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    >
                </iframe>
            </section>

        </>
    )
}

export default Player;