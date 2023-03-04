import { faBell, faBookmark, faEnvelope, faHashtag, faHome, faInfoCircle, faList, faUser } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavigationSidebar = (
  {
    active = 'explore'
  }
) => {
  return (
    <>
      <div className="list-group mb-2">
        <a className="list-group-item">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="d-none d-xl-inline"> Tuiter</span>
        </a>
        <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faHome} />
          <span className="d-none d-xl-inline"> Home</span>
        </a>
        <a className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faHashtag} />
          <span className="d-none d-xl-inline"> Explore</span>
        </a>
        <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faBell} />
          <span className="d-none d-xl-inline"> Notifications</span>
        </a>
        <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="d-none d-xl-inline"> Messages</span>
        </a>
        <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faBookmark} />
          <span className="d-none d-xl-inline"> Bookmarks</span>
        </a>
        <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faList} />
          <span className="d-none d-xl-inline"> Lists</span>
        </a>
        <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faUser} />
          <span className="d-none d-xl-inline"> Profile</span>
        </a>
        <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faInfoCircle} />
          <span className="d-none d-xl-inline"> More</span>
        </a>
      </div>
      <div class="d-grid">
        <a class="btn btn-primary btn-block rounded-pill">
          Tuit
        </a>
      </div>
    </>
  );
};
export default NavigationSidebar;