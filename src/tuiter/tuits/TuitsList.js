import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";

const TuitList = () => {
    const tweetsArray = useSelector(state => state.tuits)
    
     return(
     <ul className="list-group">
         {
         tweetsArray.map(tuit => <TuitItem tuit={tuit}/> )
         }
     </ul>
     );
    }

export default TuitList;