import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import Menu from './components/Menu';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/menu' component={Menu} />
              <Route path='/contact' component={Contact} />
              <Route path="/:post_id" component={Post} />
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
