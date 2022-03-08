import axios from 'axios';
import { useEffect, useState } from 'react';
import './HotSix.css';

const HotSix = () => {
  const [exitClicked, setExitClicked] = useState(true);
  const [pic, setPic] = useState('');
  const [artist, setArtist] = useState('');
  const [songs, setSongs] = useState([]);
  const [title, setTitle] = useState('');
  const [spotify, setSpotify] = useState('');
  const hotSix = '//////  HOT SIX';
  const [hotSixData, setHotSixData] = useState([]);

  const getHotSix = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/hotSixList');
      setHotSixData(data);
    } catch (err) {
      console.log('err');
    }
  };

  useEffect(() => {
    getHotSix();
  }, []);

  console.log('hotSixData :>> ', hotSixData);

  const handleDetailClick = (
    picInput,
    artistInput,
    songsInput,
    titleInput,
    spotifyInput
  ) => {
    setArtist(artistInput);
    setPic(picInput);
    setSongs(songsInput);
    setTitle(titleInput);
    setSpotify(spotifyInput);
    setExitClicked(false);
  };

  const handleReturnClick = () => {
    setExitClicked(true);
  };

  const renderAlbumDetail = () => {
    if (!exitClicked) {
      return (
        <div className="popup-album-container">
          <img className="popup-album" src={pic} alt="popup-album" />
          <div className="popup-album-detail">
            <h1>{artist}</h1>
            <h2>{title}</h2>
            <a href={spotify} target="_blank" rel="noreferrer">
              <button className="spotify-button" type="button">
                Listen on Spotify
              </button>
            </a>
            {songs.map((song) => (
              <ul className="songs-list">
                <li>{song}</li>
              </ul>
            ))}
          </div>
          <button
            className="album-detail-button"
            type="button"
            onClick={handleReturnClick}
          >
            X
          </button>
        </div>
      );
    }
    return '';
  };

  return (
    <>
      <h1 className="hotsix-title">{hotSix}</h1>
      <div className="album-row">
        {hotSixData.map((album) => {
          const {
            pics: picsMenu,
            artist: artistMenu,
            title: titleMenu,
            songs: songsMenu,
            spotifyLink
          } = album;
          return (
            <div className="album-column">
              <img className="album" src={picsMenu} alt={artistMenu} />
              <div className="album-description">
                <p className="album-detail">{artistMenu}</p>
                <p className="album-detail">{titleMenu}</p>
                <button
                  className="album-detail"
                  type="button"
                  onClick={() => handleDetailClick(
                    picsMenu,
                    artistMenu,
                    songsMenu,
                    titleMenu,
                    spotifyLink
                  )}
                >
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
