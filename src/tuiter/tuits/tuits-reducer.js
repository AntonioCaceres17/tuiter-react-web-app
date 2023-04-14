import { createSlice } from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk } from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false,
}

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
    "disliked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
   }
   
const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
    [findTuitsThunk.pending]: (state) => {
        state.loading = true;
        state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.tuits = state.tuits.filter(tuit => tuit._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.tuits.push(payload)
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
        state.loading = false;
        const tuitIndex = state.tuits.findIndex((t) => t._id === payload._id);
        state.tuits[tuitIndex] = {
            ...state.tuits[tuitIndex],
            ...payload
        }
    }
 },
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
    },
    toggleDisike: (state, action) => {
        const tuit = state.find(tuit => tuit._id === action.payload._id);
        tuit = !tuit.disliked;
        if (tuit.disliked) {
            tuit.dislikes++;
        }
        else {
            tuit.dislikes--;
        }
    }
} 
});
export const { toggleLike, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
