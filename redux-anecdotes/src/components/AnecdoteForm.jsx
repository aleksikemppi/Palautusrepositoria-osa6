import React from "react";
import { useDispatch } from "react-redux";
import { addNewAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = "";

    dispatch(addNewAnecdote(content));
  };

  return (
    <>
      <h2>Create New</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Anecdote</legend>
          <div>
            <input type="text" name="content" required />
          </div>
          <button type="submit">Create</button>
        </fieldset>
      </form>
    </>
  );
};

export default AnecdoteForm;
