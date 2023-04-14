import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit
     = {
        _id: "234",
            topic: "Space",
            userName: "SpaceX",
            time: "2h",
            title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            image: "spacex.jpeg",
            liked: true,
            disliked: false,
            replies: 123,
            retuits: 432,
            likes: 2345,
            dislikes: 55,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
}
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
}

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 ps-0">
                    <img alt="profile" width={50} className="rounded-circle" src={`../imgs/${tuit.image}`}/>
                    </div>
                    <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                    onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div> <span className="fw-bolder"> {tuit.userName} </span> 
                    <FontAwesomeIcon icon= {faCheckCircle} /> {tuit.handle} - {tuit.time}
                    </div>
                    <p>{tuit.tuit}</p>
                </div>
                <TuitStats key={tuit._id} tuitStats={tuit}/>
                </div>
            </li>
    );
};

export default TuitItem;