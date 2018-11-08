import React from 'react';
import './VideoBackground.css';
import Video from '../assets/concert.mp4';
import Poster from '../assets/concert.jpg';

const VideoBackground = () => (
  <div id="bgvid-under">
    <video poster={Poster} id="bgvid" playsInline autoPlay muted loop>
      <source src={Video} type="video/mp4" />
    </video>
  </div>
);

export default VideoBackground;
