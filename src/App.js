import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery, useMutation, queryCache } from "react-query";
import { getAllAnecdotes, updateVoteAnecdote } from "./services/request";

import "./App.css";

const App = () => {
  const {
    data: anecdotes,
    isLoading,
    isError,
  } = useQuery("anecdotes", getAllAnecdotes, {
    refetchOnWindowFocus: false,
    retry: 1,
    refetchInterval: false,
    timeout: 5000,
  });

  const handleVote = (anecdote) => {
    console.log(anecdote);
  };

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (isError) {
    return <div>Anecdote service not available due to server problem</div>;
  }

  return (
    <div className="main-wrapper">
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {anecdotes &&
        anecdotes.map((anecdote) => (
          <div key={anecdote.id} className="anecdote-wrap">
            <div className="content">{anecdote.content}</div>
            <div className="vote-wrap">
              <div className="has">has </div>{" "}
              <div className="vote-count"> {anecdote.votes} </div>
              <button className="vote-btn" onClick={() => handleVote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
