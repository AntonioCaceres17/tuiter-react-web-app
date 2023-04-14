import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  updateTuit,
  createTuit,
  findTuits,
  deleteTuit,
} from "./tuits-service";

export const findTuitsThunk = createAsyncThunk("tuits/findTuits", async () => {
  const tuits = await findTuits();
  return tuits;
});

export const findTuitByIdThunk = createAsyncThunk();

export const createTuitThunk = createAsyncThunk(
  "tuits/create",
  async (tuit) => {
    const newTuit = await createTuit(tuit);
    return newTuit;
  }
);

export const updateTuitThunk = createAsyncThunk(
  "tuits/update",
  async (tuit) => {
    await updateTuit(tuit);
    return tuit;
  }
);

export const deleteTuitThunk = createAsyncThunk("tuits/delete", async (id) => {
  await deleteTuit(id);
  return id;
});