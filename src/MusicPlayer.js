// code credit: https://glenthemes.tumblr.com/post/189577220509/music-player-07-by-glenthemes-a-music-player-with

import React, { useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  useEffect(() => {
    
    const audio = document.getElementById('audio');
    const playButton = document.querySelector('.playy');
    const pauseButton = document.querySelector('.pausee');

    const playMusic = () => {
      audio.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'inline';
    };

    const pauseMusic = () => {
      audio.pause();
      playButton.style.display = 'inline';
      pauseButton.style.display = 'none';
    };

    playButton.addEventListener('click', playMusic);
    pauseButton.addEventListener('click', pauseMusic);

    
    return () => {
      playButton.removeEventListener('click', playMusic);
      pauseButton.removeEventListener('click', pauseMusic);
    };
  }, []);

  return (
    <div id="glenplayer07">
      <div className="flamingo">
        <div className="circleofdeath">
          <div className="tinfoil">
            <div className="oliveoil"></div>
          </div>
          <div className="crust">
            <div className="cherry">
              <div className="music-controls">
                <i className="material-icons playy">play_arrow</i>
                <i className="material-icons pausee">pause</i>
              </div>
            </div>
          </div>
        </div>
        <div className="music-info">
          <div className="song-name">ravenclaw common room</div>
          <div className="artist-name">j scott rakozy</div>
        </div>
      </div>
      <audio id="audio" src="https://dl.dropbox.com/scl/fi/hxgv0izlf5zzbmj1mm8ck/06.-Ravenclaw-Common-Room.mp3?rlkey=bux1mgx6un15g51fle1e9hqod&st=5bft2lpx&dl=0" type="audio/mp3"></audio>
    </div>
  );
};

export default MusicPlayer;
