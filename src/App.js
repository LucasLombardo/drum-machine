import React, { Component } from 'react';
import './App.css';
import AudioElement from './components/Drum';

class App extends Component {
  render() {
    const drums = [
      'boom',
      'clap',
      'hihat',
      'kick',
      'openhat',
      'ride',
      'snare',
      'tink',
      'tom',
    ];
    return (
      <div className="App">
        <div className="wrapper">
          <h1>Drum Machine</h1>
          <div className="drums">
            {drums.map(drum => (
              <AudioElement drum={drum} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
