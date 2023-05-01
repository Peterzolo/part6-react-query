import { useQuery, useMutation, useQueryClient } from "react-query";
import { createAnecdote, getId } from "../services/request";
import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const { dispatch } = useContext(NotificationContext);

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
      dispatch({ type: "SET_NOTIFICATION", payload: "New anecdote created!" });
      setTimeout(() => {
        dispatch({ type: "CLEAR_NOTIFICATION" });
      }, 5000);
    },
  });

  const handleOnCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    if (content.length < 5) {
      dispatch({
        type: "SET_NOTIFICATION",
        payload: "Anecdote must be at least 5 characters long.",
      });
      setTimeout(() => {
        dispatch({ type: "CLEAR_NOTIFICATION" });
      }, 5000);
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
