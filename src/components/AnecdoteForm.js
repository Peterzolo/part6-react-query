import { useQuery, useMutation } from "react-query";
import { createAnecdote, getId } from "../services/request";

const AnecdoteForm = () => {
  const newAnecdoteMutation = useMutation(createAnecdote);

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    newAnecdoteMutation.mutate({ content, votes: 0, id: getId });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
