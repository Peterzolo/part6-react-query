import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const Notification = () => {
  const { state } = useContext(NotificationContext);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  if (!state.message) return null;

  if (state.error) {
    return <div style={{ ...style, color: "red" }}>{state.error}</div>;
  }

  if (state.message) {
    return <div style={style}>{state.message}</div>;
  }

  return null;
};

export default Notification;
