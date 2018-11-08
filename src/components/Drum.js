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
  static defaultProps = {
    drum: 'boom',
  };

  render() {
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
    const playAudio = () => new Audio(drums[this.props.drum]).play();
    return (
      <button className="drum" type="button" onClick={() => playAudio()}>
        {this.props.drum}
      </button>
    );
  }
}

AudioElement.propTypes = {
  drum: PropTypes.string,
};
