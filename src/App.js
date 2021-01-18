import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import CardsContainer from './components/CardsContainer';
import ValuesAccordion from './components/ValuesAccordion';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <Header />
      <Title />
      <CardsContainer />
      <ValuesAccordion />
      <Footer />
    </div>
  );
}

export default App;
