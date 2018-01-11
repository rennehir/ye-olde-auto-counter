import React, { Component } from 'react';
import logo from './car.jpg';
import './App.css';

import Counter from './Counter/Counter';

class App extends Component {
  state = {
    counters: [],
    newCounterName: ''
  };

  counterNameChangedHandler = (event) => {
    const newCounterName = event.target.value;
    this.setState({newCounterName});
  };

  addCounterHandler = () => {
    let counters = this.state.counters;
    counters.push({
      text: this.state.newCounterName,
      count: 0
    });

    let newCounterName = '';

    this.setState({
      counters,
      newCounterName
    });
  };

  deleteCounterHandler = (index) => {
    const counters = [...this.state.counters];
    counters.splice(index, 1);
    this.setState({counters});
  };

  plusOneHandler = (index) => {
    const counters = [...this.state.counters];
    counters[index].count++;
    this.setState({counters});
  };

  minusOneHandler = (index) => {
    const counters = [...this.state.counters];
    counters[index].count--;
    this.setState({counters});
  };

  resetCounterHandler = (index) => {
    const counters = [...this.state.counters];
    counters[index].count = 0;
    this.setState({counters});
  };

  render() {
    let counters = null;

    if (this.state.counters) {
      counters = (
        <div>
          {this.state.counters.map((counter, index) => {
            return <Counter
              key={counter.text + Math.random()}
              text={counter.text}
              count={counter.count}
              deleteCounter={() => this.deleteCounterHandler(index)}
              plusOne={() => this.plusOneHandler(index)}
              minusOne={() => this.minusOneHandler(index)}
              reset={() => this.resetCounterHandler(index)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ye Olde Auto Counter</h1>
        </header>
        <div className="content">
          <h2>Counters</h2>
          <p>Add new counter: <input
            type="text"
            onChange={this.counterNameChangedHandler}
            value={this.state.newCounterName} autoFocus /></p>
          <button onClick={this.addCounterHandler}>Add counter</button>
          {counters}
        </div>
      </div>
    );
  }
}

export default App;
