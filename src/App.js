import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
