import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Header';
import Annonces from './pages/Annonces';
import Details from './pages/Details';
import Favories from './pages/Favories';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<Annonces />} />
          <Route path="/favories" element={<Favories />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;