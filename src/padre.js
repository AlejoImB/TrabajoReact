import React from 'react';
import Hijo from './hijo';

function Padre() {
  const mensaje = "mensaje emitido desde el componente PADRE";

  return (
    <div>
      <h1>Componente Padre</h1>
      <Hijo mensajePadre={mensaje} />
    </div>
  );
}

export default Padre;