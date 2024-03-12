export default function Card() {
    return(
        <div className="cards">
            <div className="card">
                <img src="src/imagens/foto.png" className="img" alt="..."/>
                <p>As coisas que eu mais amo fazer</p>
                <li>Jogar volei</li>
                <li>Ouvir musicas</li>
                <li>Cozinhar</li>
                <li>Estar com amigos</li>
                <li>Beber</li> 
            </div>

            <div className="card">
                <img src="src/imagens/foto.png" className="img" alt="..."/>
                <p>Meus aritistas mais ouvidos do Spotify</p>
                <li>Gloria Groove</li>
                <li>Diarra Sylla</li>
                <li>Anitta</li>
                <li>Bea Duarte</li>
                <li>Luisa Sonza</li>
            </div>

            <div className="card">
                <img src="src/imagens/foto.png" className="img" alt="..."/>
                <p>Minhas series preferidas</p>
                <li>Steven Universe</li>
                <li>Anne With An E</li>
                <li>Ben 10</li>
                <li>Stranger Things</li>
                <li>Pose</li>
            </div>
            
        </div>
    )
}