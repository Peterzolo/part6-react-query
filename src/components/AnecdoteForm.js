import { useQuery, useMutation, useQueryClient } from "react-query";
import { createAnecdote, getId } from "../services/request";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
  });

  const handleOnCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    if (content.length < 5) {
      alert("Anecdote content should be at least 5 characters long.");
      return;
    }
    event.target.anecdote.value = "";
    newAnecdoteMutation.mutate({ content, votes: 0, id: getId });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={handleOnCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
