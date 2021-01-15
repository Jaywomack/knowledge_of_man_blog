import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/JumboTron';
import CardsContainer from './components/CardsContainer';
function App() {
  return (
    <div className='App'>
      <Header />
      <Jumbotron />
      <CardsContainer />
    </div>
  );
}

export default App;
