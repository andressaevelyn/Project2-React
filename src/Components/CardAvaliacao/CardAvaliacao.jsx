import React from "react";
import "./CardAvaliacao.css"

function CardAvalicao(props) {
    return(
        <div id="card">
            <div id="LivroAvaliado">
            <img src={props.imgFilme} alt={props.altFilme} width={100} height={150}/>
            <div id="row-column">
                <span id="iconLivro">{props.icon}</span>
                <span id="iconLivro">{props.icon}</span>
                <span id="iconLivro">{props.icon}</span>
                <span id="iconLivro">{props.icon}</span>
                <span id="iconLivro">{props.icon}</span>
            </div>
        </div>

            <div id="resenha">
                <h2>{props.titulo}</h2>
                <span>{props.paragrafo}</span>
            </div>
        </div>
    );
}

export default CardAvalicao;