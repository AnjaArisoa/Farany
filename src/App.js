import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Header';
import Annonces from './pages/Annonces';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<Annonces />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;