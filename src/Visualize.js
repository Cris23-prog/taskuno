import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import BackHome from './BackHome';

function Visualize() {
  const { dataMap } = useContext(DataContext);

  // Controllo prima del return
  if (dataMap.size === 0) {
      return (
          <div>
            <BackHome />
            <p>Non ci sono dati salvati.</p>
          </div>

      )
  }

  return (
      <div>
      <BackHome />    
      <h1>Visualizza i dati salvati</h1>
      <ul>
        {[...dataMap.entries()].map(([id, record]) => (
          <li key={id}>
            {record.nome} {record.cognome}, Email: {record.email}, Età: {record.eta}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Visualize;
