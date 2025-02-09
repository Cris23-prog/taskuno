import React, { useState, useContext } from 'react';
import BackHome from './BackHome';
import { DataContext } from './DataContext';

function Remove() {
  const [id, setId] = useState('');
  const { removeRecord } = useContext(DataContext);

  const handleDelete = (e) => {
    e.preventDefault();

    removeRecord(id);
    alert(`Record con ID ${id} eliminato con successo.`);
    
    setId('');
  };

  return (
    <div>
      <BackHome />
      <h1>Pagina di rimozione</h1>
      <form onSubmit={handleDelete}>
        <div>
          <label>ID: </label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Rimuovi</button>
      </form>
    </div>
  );
}

export default Remove;
