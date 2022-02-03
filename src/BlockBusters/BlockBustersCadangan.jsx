import myNamePics from '../pics/myname.png';
import hospitalPlaylistPics from '../pics/hospital-playlist.png';
import silentSeaPics from '../pics/silentsea.png';
import aouadPics from '../pics/aouad.png';
import obsPics from '../pics/ourbelovedsummer.png';
import './BlockBusters.css';

const BlockBusters = () => {
  const myName = {
    pics: myNamePics,
    starring: 'Han So Hee, Ahn Bo-hyun, Park Hee Soon',
    title: 'My Name',
    netflixLink: 'https://open.spotify.com/album/3ma5amx5s3l1NKoWNHaMYe'
  };

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

  const blockBusters = [myName, hospitalPlaylist, silentSea, aouad, obs];
  console.log('blockBusters :>> ', blockBusters);
  return (
    <div className="third-content">
      <h1>BLOC-K-BUSTERS</h1>
      <div className="movie-detail">
        <h2>Hospital Playlist</h2>
        <p>
          {'Starring: '}
          <strong>
            {hospitalPlaylist.starring}
          </strong>
        </p>
        <a href={hospitalPlaylist.netflixLink} target="_blank" rel="noreferrer">
          <button className="netflix-button" type="button">Watch on Netflix</button>
        </a>
      </div>
      <img src={hospitalPlaylistPics} alt="myName" />
    </div>
  );
};

export default BlockBusters;
