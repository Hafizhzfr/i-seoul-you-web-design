import { useState } from 'react';
import { Link } from 'react-scroll';
import './MotherPage.css';
import HotSix from '../HotSix/HotSix';
import BlockBusters from '../BlockBusters/BlockBusters';
import ContactUs from '../ContactUs/ContactUs';
import Credits from '../Credits/Credits';

const MotherPage = () => {
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
        <li>
          <Link activeClass="active" to="hot-six" spy smooth offset={-10} duration={500}>
            Hot Six
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="block-busters" spy smooth offset={-10} duration={500}>
            Bloc-K-Busters
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact-us" spy smooth offset={-10} duration={500}>
            Contact Us
          </Link>
        </li>
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
      <div id="hot-six">
        <HotSix />
      </div>
      <div id="block-busters">
        <BlockBusters />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
      <div id="credits">
        <Credits />
      </div>
    </div>
  );
};

export default MotherPage;
