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
        <Route
          exact
          from='/'
          component={Home}
          render={(props) => <Home {...props} />}
        />
        <Route
          path='/contact'
          component={Contact}
          render={(props) => <Contact {...props} />}
        />
        <Route
          exact
          path='/about'
          component={About}
          render={(props) => <About {...props} />}
        />
        <Route
          exact
          path='/blog'
          component={Blog}
          render={(props) => <Blog {...props} />}
        />
        <Route
          exact
          path='/health'
          component={Health}
          render={(props) => <Health {...props} />}
        />
        <Route
          exact
          path='/wealth'
          component={Wealth}
          render={(props) => <Wealth {...props} />}
        />
        <Route
          exact
          path='/wisdom'
          component={Wisdom}
          render={(props) => <Wisdom {...props} />}
        />
        <Route
          exact
          path='/legal'
          component={Legal}
          render={(props) => <Legal {...props} />}
        />
      </Switch>
      <Footer variant='main1' />
    </div>
  );
}
