import axios from "axios";

const url = "http://localhost:3001/anecdotes";
export const getId = () => (100000 * Math.random()).toFixed(0);

export const getAllAnecdotes = async () => {
  const response = await axios.get(url);
  const anecdoteObject = response.data;
  const anecdoteArray = Object.values(anecdoteObject);
  return anecdoteArray;
};

export const createAnecdote = async (dataObject) => {
  const response = await axios.post(url, dataObject);
  return response.data;
};

export const updateVoteAnecdote = async (id, votes) => {
  const response = await axios.put(`${url}/${id}`, { votes: votes });
  return response.data;
};
