import React from "react";
import '../hojas-de-estilo/Boton.css';

/*SINTAXIS DE DESESTRUCTURACION */
function Boton({texto, esBotondeClic, manejarClic}){
    return(
        <button
            /*Operador condicional o Ternario, es un operador en JavaScript */
            className={ esBotondeClic ? 'boton-clic' : 'boton-reiniciar' }
            /*Event listener = esta fucnion se llama cuando el boton reciba el evento "manejarClic" */
            onClick={manejarClic}> 
            {texto}
        </button>
    );
}

/* SINTAXIS NORMAL
function Boton(props){
    return(
        <button>
            {props.texto}
        </button>
    );
}*/
export default Boton; /* con la exporatacion por defecto, solo se puede exportar un elemto */