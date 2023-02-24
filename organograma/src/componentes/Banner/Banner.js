import './Banner.css'

export const Banner = () => {
    //JSX parece HTML, mas é como react lê e transforma em elementos no DOM
    return(
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página do Organo"/>
        </header>
    )
}