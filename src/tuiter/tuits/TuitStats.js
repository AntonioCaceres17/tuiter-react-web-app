import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faRepeat, faHeart, faShareAlt} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartBlank} from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats  = ({tuitStats}) => { 
    const dispatch = useDispatch();
    const  toggleLikeHandler = () => {
        tuitStats.liked? dispatch(updateTuitThunk({
            ...tuitStats , likes: tuitStats.likes - 1, liked: false})) : 
            dispatch(updateTuitThunk({
            ...tuitStats , likes: tuitStats.likes + 1, liked: true}))

} 
    return(
        <div className="row">
            <div className="col-1"> </div>
                    <div className="col-2">
                        <FontAwesomeIcon icon={faComment } /> {tuitStats.replies}
                    </div>
                    <div className="col-2">
                        <FontAwesomeIcon icon={faRepeat } /> {tuitStats.retuits}
            </div>
                    <div className="col-3">
                        <button onClick={() => toggleLikeHandler()} className="border-0 bg-transparent">
                        {tuitStats.liked ? ( <FontAwesomeIcon icon={faHeart} style={{color: "red"}}/> ) : 
                        ( <FontAwesomeIcon icon={faHeartBlank} /> ) }
                         </button>
                         {tuitStats.likes}
                    </div>

                    <div className='col-2'> 
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuitStats,
                        dislikes: tuitStats.dislikes + 1,
                    }))}
                    className="bi bi-hand-thumbs-down me-2"
                    id="likes"></i>{tuitStats.dislikes}
                    </div>

                    <div className="col-2"> 
                    <FontAwesomeIcon icon={faShareAlt}/>
                    </div>
            </div>
    );
};

export default TuitStats;