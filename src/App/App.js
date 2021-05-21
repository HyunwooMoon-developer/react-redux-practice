import React, { Component } from 'react';
import AddNumberRoot from '../AddNumberRoot/AddNumberRoot';
import DisplayRoot from '../DisplayRoot/DisplayRoot';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      number: 0
    }
  }
  
  render() {
    return (
      <div>
        <h1>Root </h1>
        <AddNumberRoot />
        <DisplayRoot />
      </div>
    );
  }
}

export default App;