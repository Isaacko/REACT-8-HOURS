import React from 'react';
import '../hojas-de-estilo/Contador.css'

/*Definicmos componentes fucnional , contador*/
function Contador({ numClics }){
    return (
        <div className='contador'>
            {numClics}
        </div>
    )
}

export default Contador;