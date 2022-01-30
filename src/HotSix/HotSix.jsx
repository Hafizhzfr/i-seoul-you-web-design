import gidlePics from '../pics/gidle-hwaa.png';
import chungHaPics from '../pics/xii-chungha.png';
import yerinPics from '../pics/tellusboutyourself.png';
import eyediPics from '../pics/eyedi-&new.png';
import yukikaPics from '../pics/yukika-soullady.png';
import bibiPics from '../pics/bibi-theweekend.png';
import './HotSix.css';

const HotSix = () => {
  const gidle = { pics: gidlePics, artist: '(G)I-DLE', title: 'HWAA' };
  const chungha = { pics: chungHaPics, artist: 'Chung-Ha', title: 'XII' };
  const yerin = { pics: yerinPics, artist: 'Baek Yerin', title: 'tellusboutyourself' };
  const eyedi = { pics: eyediPics, artist: 'Eyedi', title: '&NEW' };
  const yukika = { pics: yukikaPics, artist: 'Yukika', title: 'Soul Lady' };
  const bibi = { pics: bibiPics, artist: 'BiBi', title: 'The Weekend' };
  const hotSix = '//////  HOT SIX';

  const hotSixList = [gidle, bibi, yukika, eyedi, yerin, chungha];
  return (
    <div className="second-content">
      <h1>{hotSix}</h1>
      <div className="album-row">
        {hotSixList.map((album) => {
          const { pics, artist, title } = album;
          return (
            <div className="album-column">
              <img className="album" src={pics} alt={artist} />
              <div className="album-description">
                <p className="album-detail">{artist}</p>
                <p className="album-detail">{title}</p>
                <button className="album-detail" type="button">
                  Check Details!
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotSix;
