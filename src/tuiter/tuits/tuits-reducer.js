import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../imgs/nasa.webp",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   
const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers : {
    createTuit: (state, action) => {
        state.unshift({
            ...action.payload,
            ...templateTuit,
            id: (new Date()).getTime(),
        });
    },
    deleteTuit(state, action) {
        const index = state
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.splice(index, 1);
      },
   

    toggleLike: (state, action) => {
        const tuit = state.find(tuit => tuit._id === action.payload._id);
        tuit.liked = !tuit.liked;
        if (tuit.liked) {
            tuit.likes++;
        }
        else {
            tuit.likes--;
        }
    }
} 
});
export const { toggleLike, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
