import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import Remove from './Remove';
import Visualize from './Visualize';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Remove" element={<Remove />} />
        <Route path="/Visualize" element={<Visualize />} />
      </Routes>
    </div>
  );
}

export default App;



