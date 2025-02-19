import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Navbar, Button } from 'react-bootstrap';


function Visualize() {
  const { dataMap, removeRecord } = useContext(DataContext);
  const navigate = useNavigate();

  if (dataMap.size === 0) {
    return (
      <div>
              <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <div className="ms-auto">
          <Button variant="primary" onClick={() => navigate('/')}>
            HOME
            </Button>
            <Button variant="primary" onClick={() => navigate('/Add')}>
            ADD
          </Button>
        </div>
      </Container>
    </Navbar>
        <p>Non ci sono dati salvati.</p>
      </div>
    );
  }

  const handleDelete = (id) => {
    const conferma = window.confirm('Vuoi davvero eliminare questa persona?');
    if (conferma) {
      removeRecord(id);
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <div className="ms-auto">
          <Button variant="primary" onClick={() => navigate('/')}>
            HOME
            </Button>
            <Button variant="primary" onClick={() => navigate('/Add')}>
            ADD
          </Button>
        </div>
      </Container>
    </Navbar>
      <h1>Visualizza i dati salvati</h1>
      
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Email</th>
            <th>Età</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {[...dataMap.entries()].map(([id, record]) => (
            <tr key={id}>
              <td>{record.nome}</td>
              <td>{record.cognome}</td>
              <td>{record.email}</td>
              <td>{record.eta}</td>
              <td>
                {/*
                  Se disponi di un componente o una pagina dedicata alla modifica,
                  puoi fare in modo di navigare lì con l'id della persona come parametro.
                  Ad esempio: /edit/:id
                */}
                <Button variant="primary" onClick={() => navigate('/Modify')}>
                  Modify
                </Button>
                <Button onClick={() => handleDelete(id)}>Elimina</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Visualize;
