import React from "react";
import "./Livro.css";

function Livro(props) {

    const {livro} = props;
    return(
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
    );
}

export default Livro;