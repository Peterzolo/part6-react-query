import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery } from "react-query";
import { getAllAnecdotes } from "./services/request";

const App = () => {
  const result = useQuery("notes", getAllAnecdotes);

  console.log("RESULT", result);

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  const handleVote = (anecdote) => {
    console.log("vote");
  };

  const anecdotes = [
    {
      content: "If it hurts, do it more often",
      id: "47145",
      votes: 0,
    },
  ];

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
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
