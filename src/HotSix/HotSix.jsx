import { useState } from 'react';
import gidlePics from '../pics/gidle-hwaa.png';
import chungHaPics from '../pics/chungha-new.png';
import yerinPics from '../pics/yerin.png';
import eyediPics from '../pics/eyedi-cover.png';
import yukikaPics from '../pics/yukika-soullady.png';
import bibiPics from '../pics/bibi-theweekend.png';
import './HotSix.css';

const HotSix = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [pic, setPic] = useState('');
  const [artist, setArtist] = useState('');
  const [songs, setSongs] = useState([]);
  const [title, setTitle] = useState('');

  const gidle = {
    pics: gidlePics,
    artist: '(G)I-DLE',
    title: 'I-Burn',
    songs: [
      'HANN (Lost in the winter)', 'HWAA', 'MOON', 'Where Is Love', 'LOST', 'DAHLIA'
    ]
  };
  const chungha = {
    pics: chungHaPics,
    artist: 'Chung-Ha',
    title: 'QUERENCIA',
    songs: [
      'Stay Tonight', 'Bicycle', 'PLAY', 'Masquerade', 'Flying On Faith', 'Luce Sicut Stellae', 'Dream Of You', 'Bother Me', 'Chill', 'Lemon'
    ]
  };
  const yerin = {
    pics: yerinPics,
    artist: 'Baek Yerin',
    title: 'Love, Yerin',
    songs: [
      'Whenever', 'Antifreeze', 'Go Back', 'Why Me?', 'Limit', 'A Walk'
    ]
  };
  const eyedi = {
    pics: eyediPics,
    artist: 'Eyedi',
    title: '&NEW',
    songs: [
      '&NEW'
    ]
  };
  const yukika = {
    pics: yukikaPics,
    artist: 'Yukika',
    title: 'Soul Lady',
    songs: [
      'SOUL LADY', 'Neon', 'I FEEL LOVE', 'From HND to GMP', 'Yesterday', 'A Day for Love', 'pit-a-pet', 'NEON 1989', 'Cherries Jubiles', 'SHADE'
    ]
  };
  const bibi = {
    pics: bibiPics,
    artist: 'BiBi',
    title: 'The Weekend',
    songs: [
      'The Weekend'
    ]
  };
  const hotSix = '//////  HOT SIX';
  const hotSixList = [gidle, bibi, yukika, eyedi, yerin, chungha];

  const handleDetailClick = (picInput, artistInput, songsInput, titleInput) => {
    setArtist(artistInput);
    setPic(picInput);
    setSongs(songsInput);
    setTitle(titleInput);
    setButtonPressed(false);
    if (!buttonPressed) {
      setButtonPressed(true);
    }
  };

  return (
    <div className="second-content">
      <h1>{hotSix}</h1>
      <div className="album-row">
        {hotSixList.map((album) => {
          const {
            pics: picsMenu, artist: artistMenu, title: titleMenu, songs: songsMenu
          } = album;
          return (
            <div className="album-column">
              <img className="album" src={picsMenu} alt={artistMenu} />
              <div className="album-description">
                <p className="album-detail">{artistMenu}</p>
                <p className="album-detail">{titleMenu}</p>
                <button className="album-detail" type="button" onClick={() => handleDetailClick(picsMenu, artistMenu, songsMenu, titleMenu)}>
                  Check Details!
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="popup-album-container">
        <h1>{artist}</h1>
        <h1>{title}</h1>
        <img className="popup-album" src={pic} alt="popup-album" />
        {songs.map((song) => (
          <ul>
            <li>{song}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default HotSix;
