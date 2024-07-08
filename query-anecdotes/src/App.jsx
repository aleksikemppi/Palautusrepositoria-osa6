import React, { useState, useEffect } from 'react';
import { NotificationProvider } from './NotificationContext';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import anecdoteService from './services/anecdote-service';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([]);

  const fetchAnecdotes = async () => {
    const anecdotes = await anecdoteService.getAllAnecdotes();
    setAnecdotes(anecdotes);
  };

  useEffect(() => {
    fetchAnecdotes();
  }, []);

  const handleVote = async (anecdote) => {
    await anecdoteService.voteAnecdote(anecdote);
    fetchAnecdotes();
  };

  return (
    <NotificationProvider>
      <div>
        <h1>Anecdote app</h1>
        <Notification />
        <AnecdoteForm fetchAnecdotes={fetchAnecdotes} />
        <h2>Anecdotes</h2>
        {anecdotes
          .sort((a, b) => b.votes - a.votes)
          .map((anecdote) => (
            <div key={anecdote.id}>
              {anecdote.content}
              <div>
                has {anecdote.votes} votes
                <button onClick={() => handleVote(anecdote)}>like</button>
              </div>
            </div>
          ))}
      </div>
    </NotificationProvider>
  );
};

export default App;
