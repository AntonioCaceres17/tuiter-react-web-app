
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
const ExploreComponent = () => {
  return (
    <>
    <div className="row"> 
      <div className="col-11 position-relative">
        <span className="wd-search">
        <FontAwesomeIcon icon={faSearch} className="position-relative float-left"/>
        <input placeholder="Search Tuiter" id="search-bar" className="wd-input"/>
        </span>
        <i className="bi bi-search position-absolute
            wd-nudge-up"></i>
    </div>

    <div className="col-1">
    <span><FontAwesomeIcon icon={faCog} size={"2x"} className="float-end align-middle text-primary"> </FontAwesomeIcon></span>
    </div>
    </div>
      <div className="nav nav-tabs mb-2">
        <div className="nav-item">
          <a className="nav-link active" aria-current="page">For you</a>
        </div>
        <div className="nav-item">
          <a className="nav-link">Trending</a>
        </div>
        <div className="nav-item">
          <a className="nav-link">News</a>
        </div>
        <div className="nav-item">
          <a className="nav-link">Sports</a>
        </div>
        <div className="nav-item d-none d-md-block">
          <a className="nav-link">Entertainment</a>
        </div>
      </div>
      <div className="card rounded-0">
        <img src="../imgs/starship.webp" className="card-img rounded-0" />
        <div className="card-img-overlay d-flex flex-column ps-2 pb-0">
          <h2 className="card-title mt-auto mb-1 text-white">SpaceX Starship</h2>
        </div>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;