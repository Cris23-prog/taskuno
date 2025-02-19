import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BackHome() {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <div className="ms-auto">
          <Button variant="primary" onClick={() => navigate('/')}>
            HOME
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default BackHome;
