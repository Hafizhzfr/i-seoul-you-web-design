import { useState } from 'react';
import './HomePage.css';
import HotSix from '../HotSix/HotSix';

const HomePage = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const onClickHandler = () => {
    setIsButtonPressed(false);
    if (!isButtonPressed) {
      setIsButtonPressed(true);
    }
  };

  const renderOtherContents = () => {
    if (!isButtonPressed) {
      return '';
    }
    return (
      <ul>
        <li>Hot Six</li>
        <li>Block-K-Busters</li>
        <li>ShowBizz Papparazzi</li>
      </ul>
    );
  };

  return (
    <div className="home-page-container">
      <div className="first-content-container">
        <div className="first-content">
          <h1>I SEOUL YOU</h1>
          <button className="button-count" type="button" onClick={onClickHandler}>
            Explore Now!
          </button>
          {renderOtherContents()}
        </div>
      </div>
      <HotSix />
    </div>
  );
};

export default HomePage;
