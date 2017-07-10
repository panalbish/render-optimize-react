import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';

import Target from './components/Target';
import store from './store';
import logo from './logo.svg';
import css from './App.css';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  render() {
    const targets = this.state.targets.map(target => (
      <Target key={target.id} target={target} />
    ));
    const height = window ? window.innerHeight : 800;
    const width = window ? window.innerWidth : 800;
    return (
      <div className="App">
        <div className={css.appHeader}>
          <img src={logo} className="appLogo" alt="logo" />
          <h2>Optimising React Rendering</h2>
        </div>
        <Stage width={width} height={height}>
          <Layer hitGraohEnabled={false}>
            {targets}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
