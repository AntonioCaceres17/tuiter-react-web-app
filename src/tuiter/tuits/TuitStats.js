import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faRepeat, faHeart, faShareAlt} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartBlank} from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { toggleLike } from "./tuits-reducer";

const TuitStats  = ({tuitStats}) => { 
    const dispatch = useDispatch();
    const  toggleLikeHandler = (Tuit) => {
        dispatch(toggleLike(Tuit));

} 
    return(
        <div className="row">
            <div className="col-1"> </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faComment } /> {tuitStats.replies}
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faRepeat } /> {tuitStats.retuits}
            </div>
                    <div className="col-3">
                        <button onClick={() => toggleLikeHandler(tuitStats)} className="border-0 bg-transparent">
                        {tuitStats.liked ? ( <FontAwesomeIcon icon={faHeart} style={{color: "red"}}/> ) : 
                        ( <FontAwesomeIcon icon={faHeartBlank} /> ) }
                         </button>
                         {tuitStats.likes}

                    </div>

                    <div className="col-2"> 
                    <FontAwesomeIcon icon={faShareAlt}/>
                    </div>
            </div>
    );
};

export default TuitStats;