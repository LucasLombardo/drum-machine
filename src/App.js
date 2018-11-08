import React, { Component } from 'react';
import './App.css';
import AudioElement from './components/Drum';
import VideoBackground from './components/VideoBackground';

class App extends Component {
  render() {
    const drums = [
      ['boom', 'Q'],
      ['clap', 'W'],
      ['hihat', 'E'],
      ['kick', 'A'],
      ['openhat', 'S'],
      ['ride', 'D'],
      ['snare', 'Z'],
      ['tink', 'X'],
      ['tom', 'C'],
    ];
    return (
      <div className="App">
        <VideoBackground />
        <div className="wrapper">
          <h1>Drum Machine</h1>
          <div className="drums">
            {drums.map(drum => (
              <AudioElement drum={drum[0]} keybind={drum[1]} key={drum[0]} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
