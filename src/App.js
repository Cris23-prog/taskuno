import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import Modify from './Modify';
import Visualize from './Visualize';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Visualize" element={<Visualize />} />
        <Route path="/Modify" element={<Modify />} />
      </Routes>
    </div>
  );
}

export default App;



