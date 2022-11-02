import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  const cards = data.map(item => {
    return (
        <Card 
            img={item.imageUrl}
            title={item.title} 
            location={item.location}
            link={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate} 
            description={item.description} 
        />
    )
})

  return (
    <div className="container">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
