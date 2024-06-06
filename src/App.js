import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import JudasPriestlogo from './imagenes/Judas-Priest-logo.webp';
/*HOOK  DE RACTA => useState: Permite agregar estado a un componente funcional. Esto 
significa que puedes tener variables de estado en un componente sin 
necesidad de convertirlo en una clase.*/
import { useState } from 'react';


function App() {
  /*Declaramos una constante */

  const[numClics, setNumClics] = useState(0);


  /*DEFINR FUNCION EN UN COMPONENTE  */
  /*PARA CONTAR LOS CLICS */
  const manejarClic = () =>{
    setNumClics(numClics + 1); 
  };
  /*
  const manejarClic = () => {
    console.log('Clic');
  }*/

  /*PARA REINICIAR EL CONTADOR */
  const reiniciarContador = () => {
    setNumClics(0);
  }
 /*
  function reiniciarContador() {
    console.log('Reiniciar');
  }
  */


  return (
    <div className="App">
      <div className='freedcodecamp-logo-contenedor'>
        <img 
        className='freeCodeCamp-Logo'
        src={JudasPriestlogo}
        alt='Logo de freeCodeCamp'/>

      </div>
      <div className='contenedor-principal'>
      
        <Contador numClics = {numClics} />

        <Boton
        texto='Clic'
        esBotondeClic={true}
        manejarClic={manejarClic}
        />
        <Boton
        texto='Reiniciar'
        esBotondeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
