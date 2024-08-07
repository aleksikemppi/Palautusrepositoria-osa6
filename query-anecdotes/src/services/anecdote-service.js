// services/anecdote-service.js
import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);

const getAllAnecdotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createAnecdote = async (content) => {
  const newAnecdote = {
    content,
    id: getId(),
    votes: 0,
  };

  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
};

const voteAnecdote = async (anecdote) => {
  const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, updatedAnecdote);
  return response.data;
};

export default { getAllAnecdotes, createAnecdote, voteAnecdote };
