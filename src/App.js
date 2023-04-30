import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery, useMutation, queryCache } from "react-query";
import { getAllAnecdotes, updateVoteAnecdote } from "./services/request";

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
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes &&
        anecdotes.map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
