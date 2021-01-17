import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import CardsContainer from './components/CardsContainer';
import Health from './components/Health';
function App() {
  return (
    <div className='App'>
      <Header />
      <Title />
      <CardsContainer />
      <Health />
    </div>
  );
}

export default App;
