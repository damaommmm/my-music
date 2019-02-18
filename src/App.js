import React, { Component } from 'react';
import './App.css';
import BottomBar from './component/BottomBar/BottomBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="">

          </div>
          <div className="content">

          </div>
          <div className="tool-bar">
              <BottomBar />
          </div>
      </div>
    );
  }
}

export default App;
