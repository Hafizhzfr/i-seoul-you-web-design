import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import myNamePics from '../pics/myname.png';
import hospitalPlaylistPics from '../pics/hospital-playlist.png';
import silentSeaPics from '../pics/silentsea.png';
import aouadPics from '../pics/aouad.png';
import obsPics from '../pics/ourbelovedsummer.png';
import './BlockBusters.css';

const BlockBusters = () => {
  const hospitalPlaylist = {
    pics: hospitalPlaylistPics,
    starring: 'Jo Jun-Suk, Jeon Mi-do, Ahn Eun-jin',
    title: 'Hospital Playlist',
    netflixLink: 'https://www.netflix.com/id-en/title/81239224'
  };

  const silentSea = {
    pics: silentSeaPics,
    starring: 'Bae Doona, Gong Yoo',
    title: 'The Silent Sea',
    netflixLink: 'https://open.spotify.com/album/3ma5amx5s3l1NKoWNHaMYe'
  };

  const aouad = {
    pics: aouadPics,
    starring: 'Park Solomon, Lee Yoo-Mi, Cho Yi-hyun',
    title: 'All of Us Are Dead',
    netflixLink: 'https://open.spotify.com/album/3ma5amx5s3l1NKoWNHaMYe'
  };

  const obs = {
    pics: obsPics,
    starring: 'Kim Da-mi, Choi Woo-shik',
    title: 'Our Beloved Summer',
    netflixLink: 'https://open.spotify.com/album/3ma5amx5s3l1NKoWNHaMYe'
  };

  const myName = {
    pics: myNamePics,
    starring: 'Han So Hee, Ahn Bo-hyun, Park Hee Soon',
    title: 'My Name',
    netflixLink: 'https://open.spotify.com/album/3ma5amx5s3l1NKoWNHaMYe'
  };
  //= =============================================================================================

  const [indexInput, setIndexInput] = useState(0);
  const [translate, setTranslate] = useState(100);
  const [shouldTransition, setShouldTransition] = useState(true);
  const blockBusters = [myName, hospitalPlaylist, silentSea, aouad, obs];
  const nextEnabler = indexInput === blockBusters.length - 1;
  const prevEnabler = indexInput === 0;

  const handleNext = () => {
    setIndexInput(indexInput + 1);
    setShouldTransition(false);
    setTranslate(100);
  };

  const handlePrev = () => {
    setIndexInput(indexInput - 1);
    setShouldTransition(false);
    setTranslate(100);
  };

  useEffect(() => {
    if (translate === 100) {
      setShouldTransition(true);
      setTranslate(10);
    }
  }, [translate]);

  return (
    <div className="third-content">
      <h1>BLOC-K-BUSTERS</h1>
      <div className="movie-detail">
        <a href={blockBusters[indexInput].netflixLink} target="_blank" rel="noreferrer">
          <button className="netflix-button" type="button">Watch on Netflix</button>
        </a>
        <h2 style={{
          transition: shouldTransition ? 'all 0.5s' : '',
          transform: `translateY(${translate}px)`
        }}
        >
          { blockBusters[indexInput].title}

        </h2>
        <p style={{
          transition: shouldTransition ? 'all 0.5s' : '',
          transform: `translateY(${translate}px)`
        }}
        >
          {'Starring: '}
          <strong>
            {blockBusters[indexInput].starring}
          </strong>
        </p>
      </div>
      <div className="button-next-prev">
        <button disabled={prevEnabler} className="next-button" type="button" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button disabled={nextEnabler} className="prev-button" type="button" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <img src={blockBusters[indexInput].pics} alt="myName" />
    </div>
  );
};
export default BlockBusters;
