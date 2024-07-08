import React from 'react';
import { useNotification } from '../NotificationContext';
import anecdoteService from '../services/anecdote-service';

const AnecdoteForm = ({ fetchAnecdotes }) => {
  const [, dispatch] = useNotification();

  const handleCreateAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    if (content.length < 5) {
      dispatch({ type: 'SET_NOTIFICATION', payload: 'Anecdote is too short, must be at least 5 characters long' });
      setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
      }, 5000);
      return;
    }

    try {
      await anecdoteService.createAnecdote(content);
      fetchAnecdotes(); // Fetch and update anecdotes list
      dispatch({ type: 'SET_NOTIFICATION', payload: `Anecdote '${content}' created!` });
      setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
      }, 5000);
    } catch (error) {
      dispatch({ type: 'SET_NOTIFICATION', payload: 'Anecdote creation failed!' });
      setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleCreateAnecdote}>
      <input name="anecdote" />
      <button type="submit">Create</button>
    </form>
  );
};

export default AnecdoteForm;
