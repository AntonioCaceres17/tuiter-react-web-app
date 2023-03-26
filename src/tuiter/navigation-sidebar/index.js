import { faBell, faBookmark, faEnvelope, faHashtag, faHome, faEllipsisH, faList, faUser } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";


const NavigationSidebar = (

) => {
  const {pathname} = useLocation();
  const active = pathname.split('/')[2];
  return (
    <>
      <div className="list-group mb-2">
        <a  href="https://www.lipsum.com" className="list-group-item">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="d-none d-xl-inline"> Tuiter</span>
        </a>
        <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faHome} />
          <span className="d-none d-xl-inline"> Home</span>
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faHashtag} />
          <span className="d-none d-xl-inline"> Explore</span>
        </Link>
        <a href="https://www.lipsum.com"className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faBell} />
          <span className="d-none d-xl-inline"> Notifications</span>
        </a>
        <a href="https://www.lipsum.com" className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="d-none d-xl-inline"> Messages</span>
        </a>
        <a href="https://www.lipsum.com" className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faBookmark} />
          <span className="d-none d-xl-inline"> Bookmarks</span>
        </a>
        <a href="https://www.lipsum.com" className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faList} />
          <span className="d-none d-xl-inline"> Lists</span>
        </a>
        <a href="https://www.lipsum.com" className={`list-group-item
                    ${active === 'profile' ? 'active' : '#'}`}>
          <FontAwesomeIcon icon={faUser} />
          <span className="d-none d-xl-inline"> Profile</span>
        </a>
        <a href="https://www.lipsum.com" className={`list-group-item
                    ${active === 'more' ? 'active' : '#'}`}>
          <FontAwesomeIcon icon={faEllipsisH} />
          <span className="d-none d-xl-inline"> More</span>
        </a>
      </div>
      <div className="d-grid">
        <a href="https://www.lipsum.com" className="btn btn-primary btn-block rounded-pill">
          Tuit
        </a>
      </div>
    </>
  );
};
export default NavigationSidebar;