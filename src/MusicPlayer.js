// code credit: https://glenthemes.tumblr.com/post/189577220509/music-player-07-by-glenthemes-a-music-player-with

import React from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlaying = () => {
    const audio = document.getElementById('audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  const progressUpdate = () => {
    const audio = document.getElementById('audio');
    const progress = document.querySelector('.oliveoil');

    const p = parseInt(((audio.currentTime / audio.duration) * 100), 10);

    if (p === 100) {
      progress.style.backgroundImage = "none";
      setIsPlaying(false);
    } else {
      progress.style.backgroundImage = `conic-gradient(var(--Progress-Fill) ${p}%, var(--Progress-Empty) ${p}%)`;
    }
  }

  return (
    <div id="glenplayer07">
      <div className="flamingo">
        <div className="circleofdeath">
          <div className="tinfoil">
            <div className="oliveoil"></div>
          </div>
          <div className="crust">
            <div onClick={togglePlaying} className="cherry">
              <div className="music-controls">
                {isPlaying
                  ? <i className="material-icons">pause</i>
                  : <i className="material-icons">play_arrow</i>}
              </div>
            </div>
          </div>
        </div>
        <div className="music-info">
          <div className="song-name">ravenclaw common room</div>
          <div className="artist-name">j scott rakozy</div>
        </div>
      </div>
      <audio onTimeUpdate={progressUpdate} id="audio" src="https://dl.dropbox.com/scl/fi/hxgv0izlf5zzbmj1mm8ck/06.-Ravenclaw-Common-Room.mp3?rlkey=bux1mgx6un15g51fle1e9hqod&st=5bft2lpx&dl=0" type="audio/mp3"></audio>
    </div>
  );
};

export default MusicPlayer;
