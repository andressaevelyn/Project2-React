import React from "react";
import './Header.css';
//import { name } from "react-icons/ai";


function Header(props) {
    return(
        <header>
            <div id="perfil">
            <img src={props.imagem} alt="imagem" width={80}/>
            <h1 id="black">{props.titulo}</h1>
            </div>

            <div  id="qtdLidos">
                <h1>{props.lidos}</h1>
                <h1>assistidos</h1>
            </div>

            <div id="qtdALer">
                <h1>{props.vouLer}</h1>
                <h1>vou assistir</h1>
            </div>
        </header>
    );
}

export default Header;