import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faEnvelope, faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  console.log('ContactUs');
  return (
    <div className="screen">
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact-container">
            <div className="app-contact">
              <FontAwesomeIcon icon={faHome} />
              {' '}
              4F, 125-20 Chungoam kangnam-GU, Seoul, Korea.
            </div>
            <div className="app-contact">
              <FontAwesomeIcon icon={faEnvelope} />
              {' '}
              uaintgotshit@fakemail.com
            </div>
            <div className="app-contact">
              <FontAwesomeIcon icon={faPhoneAlt} />
              {' '}
              +62 81 314 928 595

            </div>
          </div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO" />
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" />
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button" type="button">CANCEL</button>
              <button className="app-form-button" type="button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
