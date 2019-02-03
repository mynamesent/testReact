import React, { Component }from 'react';
import axios from 'axios';
import Login from './Component/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo(0, 0)
    return null
  }


class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <Route component={scrollToTop} />
                <Switch>
                <Route path='/Login' render={(props) => <Login {...props}/>}/>
              
                </Switch>       
              </div>
            </Router>
          )

    }
}

export default App;
