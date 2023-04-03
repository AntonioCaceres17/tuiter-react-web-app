import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import PostSummaryItem from "./post-summary-item";
import {findTuitsThunk} from "../../services/tuits-thunks";


const PostSummaryList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(findTuitsThunk())
  }, [])
  return(
      <ul className="list-group pt-2">
          {
              loading &&
              <li className="list-group-item">
                  Loading...
              </li>
          }
          {
              tuits.map(post =>
                  <PostSummaryItem
                      key={post._id} post={post}/> )
          }
      </ul>
  );
};
export default PostSummaryList;