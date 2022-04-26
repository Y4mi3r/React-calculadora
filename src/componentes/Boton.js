import React from 'react';
import '../hojas-estilo/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <button 
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={() => props.manejarClic(props.children)}> 
      {props.children}
    </button>
  );
}
// onClick con el => es llamar una function anonima que solo se va a usar una sola vez
export default Boton;