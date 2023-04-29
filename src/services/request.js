import axios from "axios";

const url = "http://localhost:3001/anecdotes";

export const getAllAnecdotes = async () => {
  const response = await axios.get(url);
  return response.data;
};
