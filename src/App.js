import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FactOne from './components/FactOne'
import FactTwo from './components/FactTwo'
import FactThree from './components/FactThree'
import Links from './Links'


class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div className="App">
        <Links />
        <Switch>
          <Route exact path='/ ' />
          <Route path='/FactOne' component={FactOne} />
          <Route path='/FactTwo' component={FactTwo} />
          <Route path='/FactThree' component={FactThree} />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
