import React from 'react';
import Title from '../components/Title';
import CardsContainer from '../components/CardsContainer';
import ValuesAccordion from '../components/ValuesAccordion';

const Home = (props) => {
  return (
    <div>
      <Title />
      <CardsContainer />
      <ValuesAccordion />
    </div>
  );
};

export default Home;
