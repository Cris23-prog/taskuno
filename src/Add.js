import React, { useState, useContext } from 'react';
import BackHome from './BackHome';
import { DataContext } from './DataContext';

function Add() {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [email, setEmail] = useState('');
  const [eta, setEta] = useState('');

  const { addRecord } = useContext(DataContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newRecord = { nome, cognome, email, eta };
    
    // Salviamo l'ID del record
    const recordId = addRecord(newRecord);
  
    // Reset del form
    setNome('');
    setCognome('');
    setEmail('');
    setEta('');

    alert('Dati salvati con successo, con ID : ' + recordId);
  };

  return (
    <div>
      <BackHome />
      <h1>Aggiungi una nuova persona</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Cognome:</label>
          <input type="text" value={cognome} onChange={(e) => setCognome(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Età:</label>
          <input type="number" value={eta} onChange={(e) => setEta(e.target.value)} required />
        </div>
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

export default Add;
