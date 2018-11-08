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
        <h1>Drum Machine</h1>
        {drums.map(drum => (
          <AudioElement drum={drum} />
        ))}
      </div>
    );
  }
}

export default App;
