import React from "react";
import './Menu.css';

function Menu(props)  {
    return (
        <div id="categoria">
            <span id="icon">{props.icon}</span>
            <h3> <a>{props.categoria}</a></h3>
        </div>
    )
}

export default Menu;