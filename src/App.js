import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Health from './pages/Health';
import Wealth from './pages/Wealth';
import Wisdom from './pages/Wisdom';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

import Footer from './components/Footer';

export default function App() {
  return (
    <div className='App'>
      <Header stickyHeader />
      <Switch>
        <Route exact from='/' render={(props) => <Home {...props} />} />
        <Route path='/contact' render={(props) => <Contact {...props} />} />
        <Route exact path='/about' render={(props) => <About {...props} />} />
        <Route exact path='/blog' render={(props) => <Blog {...props} />} />
        <Route exact path='/health' render={(props) => <Health {...props} />} />
        <Route exact path='/wealth' render={(props) => <Wealth {...props} />} />
        <Route exact path='/wisdom' render={(props) => <Wisdom {...props} />} />
        <Route exact path='/legal' render={(props) => <Legal {...props} />} />
      </Switch>
      <Footer variant='main1' />
    </div>
  );
}
