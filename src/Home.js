import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import di useNavigate

function Home() {
  const navigate = useNavigate();  // Hook per la navigazione

  return (
    <Container className="mt-5">
      <h1>Primo Task</h1>
      
      <Button 
        onClick={() => navigate('/Add')}
        variant="primary" 
        size="lg" 
        className="mb-3"
      >
        Aggiungi
      </Button>
      <br />
      
      <Button 
        variant="primary" 
        size="lg" 
        className="mb-3"
        onClick={() => navigate('/Visualize')}
      >
        Visualizza
      </Button>
      <br />
      
    </Container>
  );
}

export default Home;
