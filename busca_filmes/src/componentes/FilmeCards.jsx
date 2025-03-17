
function FilmeCards({filme}) {

    function onFavoritosClick() {
        alert("Clicado")

    }

    return <div className="card-dos-filmes">
        <div className="cartaz-filmes">
            <img src={filme.url} alt={filme.nome}/>
            <div className="overlay-filme">
                <button className="favoritos-btn" onClick={onFavoritosClick}>
                🤍
                </button>

            </div>
        </div>
        <div className="informacoes-filme">
            <h3>{filme.nome}</h3>
            <p>{filme.data_lançamento}</p>
        </div>
    </div>
}