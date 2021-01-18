import React from 'react';
import Title from '../components/Title';
import CardsContainer from '../components/CardsContainer';
import ValuesAccordion from '../components/ValuesAccordion';
import Footer from '../components/Footer';

const Home = (props) => {
  return (
    <div>
      <Title />
      <CardsContainer />
      <ValuesAccordion />
      <Footer />
    </div>
  );
};

export default Home;
