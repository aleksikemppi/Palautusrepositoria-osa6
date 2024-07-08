import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";
import { setNotificationWithTimeout } from "./notificationReducer";

export const getId = () => (100000 * Math.random()).toFixed(0);

export const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    voteAnecdote: (state, action) => {
      const foundAnecdote = state.find(
        (anecdote) => anecdote.id === action.payload
      );
      foundAnecdote.votes++;
    },
    addAnecdote: (state, action) => {
      state.push(action.payload);
    },
    setAnecdotes: (state, action) => action.payload,
  },
});

export const { voteAnecdote, addAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAllAnecdotes();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNewAnecdote(content);
    dispatch(addAnecdote(newAnecdote));
    dispatch(setNotificationWithTimeout(`you created '${content}'`, 5));
  };
};

export const saveAnecdoteVote = (anecdoteId) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteService.voteAnecdote(anecdoteId);
    dispatch(voteAnecdote(votedAnecdote.id));
    dispatch(
      setNotificationWithTimeout(`you voted '${votedAnecdote.content}'`, 5)
    );
  };
};

export default anecdoteSlice.reducer;
