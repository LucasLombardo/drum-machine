/* eslint jsx-a11y/media-has-caption: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Drum.css';

import boom from '../assets/sounds/boom.wav';
import clap from '../assets/sounds/clap.wav';
import hihat from '../assets/sounds/hihat.wav';
import kick from '../assets/sounds/kick.wav';
import openhat from '../assets/sounds/openhat.wav';
import ride from '../assets/sounds/ride.wav';
import snare from '../assets/sounds/snare.wav';
import tink from '../assets/sounds/tink.wav';
import tom from '../assets/sounds/tom.wav';

export default class AudioElement extends Component {
  constructor(props) {
    super(props);
    this.state = { isPressed: false };

    this.playAudio = this.playAudio.bind(this);
    this.drumbtn = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keypress', (e) => {
      const key = e.which || e.keyCode;
      if (
        key === this.props.keybind.charCodeAt(0)
        || key === this.props.keybind.toLowerCase().charCodeAt(0)
      ) {
        this.playAudio();
      }
    });
  }

  playAudio() {
    const drums = {
      boom,
      clap,
      hihat,
      kick,
      openhat,
      ride,
      snare,
      tink,
      tom,
    };
    new Audio(drums[this.props.drum]).play();
    this.setState(state => ({
      isPressed: true,
    }));
    setTimeout(() => {
      this.setState(state => ({
        isPressed: false,
      }));
    }, 150);
  }

  render() {
    return (
      <button
        className={this.state.isPressed ? 'drum pressed' : 'drum'}
        type="button"
        onClick={this.playAudio}
        ref={this.drumbtn}
      >
        {this.props.drum}
        <br />({this.props.keybind})
      </button>
    );
  }
}

AudioElement.propTypes = {
  drum: PropTypes.string.isRequired,
  keybind: PropTypes.string.isRequired,
};
