import React, { Component } from 'react'
import LifeCycle from './components/life-cycle-methods'
import Monsters from './components/monsters'

export default class App extends Component {
  render() {
    return (
          <div className="App">
            <Monsters />
            {/* <LifeCycle /> */}
          </div>
        );
  }
}

