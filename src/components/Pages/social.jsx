import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import "./social.css";

const SocialMediaButtons = () => {
  return (
    <div>
      <a className="font1" href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a  className="font2"href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a className="font3" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a  className="font4"href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default SocialMediaButtons;
