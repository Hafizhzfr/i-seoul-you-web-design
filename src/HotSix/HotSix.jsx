import { useState } from 'react';
import gidlePics from '../pics/gidle-hwaa.png';
import secondYukikaPics from '../pics/yukika-timeabout.png';
import yerinPics from '../pics/yerin.png';
import eyediPics from '../pics/eyedi-cover.png';
import yukikaPics from '../pics/yukika-soullady.png';
import bibiPics from '../pics/bibi-lifeisabi.png';
import './HotSix.css';

const HotSix = () => {
  const [exitClicked, setExitClicked] = useState(false);
  const [pic, setPic] = useState('');
  const [artist, setArtist] = useState('');
  const [songs, setSongs] = useState([]);
  const [title, setTitle] = useState('');
  const [spotify, setSpotify] = useState('');

  const gidle = {
    pics: gidlePics,
    artist: '(G)I-DLE',
    title: 'I-Burn',
    songs: [
      'HANN (Lost in the winter)', 'HWAA', 'MOON', 'Where Is Love', 'LOST', 'DAHLIA'
    ],
    spotifyLink: 'https://open.spotify.com/album/3ma5amx5s3l1NKoWNHaMYe'
  };
  const secondYukika = {
    pics: secondYukikaPics,
    artist: 'Yukika',
    title: 'timeabout,',
    songs: [
      'Leap forward', 'Insomnia', 'Love Month', 'TIME TRAVEL', 'Secret', 'PUNG!'
    ],
    spotifyLink: 'https://open.spotify.com/album/1cBAfX0otvkoIOI6HtOrAc'
  };
  const yerin = {
    pics: yerinPics,
    artist: 'Baek Yerin',
    title: 'Love, Yerin',
    songs: [
      'Whenever', 'Antifreeze', 'Go Back', 'Why Me?', 'Limit', 'A Walk'
    ],
    spotifyLink: 'https://open.spotify.com/album/2K41KAlW6n9bVlRCQPVcSZ'
  };
  const eyedi = {
    pics: eyediPics,
    artist: 'Eyedi',
    title: '&NEW',
    songs: [
      '&NEW', 'Caffeine', 'J.us.T', 'Best Mistake - K', 'Luv Highway'
    ],
    spotifyLink: 'https://open.spotify.com/artist/48BSHaU3lXnM3pYHyeqLXN'
  };
  const yukika = {
    pics: yukikaPics,
    artist: 'Yukika',
    title: 'Soul Lady',
    songs: [
      'SOUL LADY', 'Neon', 'I FEEL LOVE', 'From HND to GMP', 'Yesterday', 'A Day for Love', 'pit-a-pet', 'NEON 1989', 'Cherries Jubiles', 'SHADE'
    ],
    spotifyLink: 'https://open.spotify.com/album/16yrp3d9pCJgQK2RMBTtd1'
  };
  const bibi = {
    pics: bibiPics,
    artist: 'BiBi',
    title: 'Life is a Bi...',
    songs: [
      'Umm... Life', 'BAD SAD AND MAD', 'PIRI the dog', 'Birthday Cake', 'Life is a Bi...'
    ],
    spotifyLink: 'https://open.spotify.com/album/0VDb4oas0usbuPljrSZH5s'
  };
  const hotSix = '//////  HOT SIX';
  const hotSixList = [gidle, bibi, yukika, eyedi, yerin, secondYukika];

  const handleDetailClick = (picInput, artistInput, songsInput, titleInput, spotifyInput) => {
    setArtist(artistInput);
    setPic(picInput);
    setSongs(songsInput);
    setTitle(titleInput);
    setSpotify(spotifyInput);
    setExitClicked(false);
    if (!exitClicked) {
      setExitClicked(true);
    }
  };

  const handleReturnClick = () => {
    setExitClicked(false);
  };

  const renderAlbumDetail = () => {
    if (exitClicked) {
      return (
        <div className="popup-album-container">
          <img className="popup-album" src={pic} alt="popup-album" />
          <div className="popup-album-detail">
            <h1>{artist}</h1>
            <h2>{title}</h2>
            <a href={spotify} target="_blank" rel="noreferrer">
              <button className="spotify-button" type="button">Listen on Spotify</button>
            </a>
            {songs.map((song) => (
              <ul className="songs-list">
                <li>{song}</li>
              </ul>
            ))}
          </div>
          <button className="album-detail-button" type="button" onClick={handleReturnClick}>X</button>
        </div>

      );
    }
    return '';
  };

  return (
    <>
      <h1 className="hotsix-title">{hotSix}</h1>
      <div className="album-row">
        {hotSixList.map((album) => {
          const {
            pics: picsMenu, artist: artistMenu, title: titleMenu, songs: songsMenu, spotifyLink
          } = album;
          return (
            <div className="album-column">
              <img className="album" src={picsMenu} alt={artistMenu} />
              <div className="album-description">
                <p className="album-detail">{artistMenu}</p>
                <p className="album-detail">{titleMenu}</p>
                <button className="album-detail" type="button" onClick={() => handleDetailClick(picsMenu, artistMenu, songsMenu, titleMenu, spotifyLink)}>
                  Check Details!
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {renderAlbumDetail()}
    </>
  );
};

export default HotSix;
