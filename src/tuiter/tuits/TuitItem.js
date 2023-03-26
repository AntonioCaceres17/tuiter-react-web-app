import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../tuits/tuits-reducer";



const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
}

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 ps-0">
                    <img alt="profile" width={50} className="rounded-circle" src={`/images/${tuit.image}`}/>
                    </div>
                    <div className="col-10">
                    <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div> <span className="fw-bolder"> {tuit.userName} </span> 

                    <FontAwesomeIcon icon= {faCheckCircle} /> {tuit.handle} - {tuit.time}
                    </div>
                    <p>{tuit.tuit}</p>
                </div>
                <TuitStats tuitStats={tuit}/>
                </div>
            </li>
    );
};

export default TuitItem;