import React from 'react';

function Hijo({ mensajePadre }) {
  return (
    <div>
      <h2>Componente Hijo</h2>
      <p>Mensaje recibido del componente padre: {mensajePadre}</p>
    </div>
  );
}

export default Hijo;