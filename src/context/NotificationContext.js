import React, { createContext, useReducer } from "react";

export const NotificationContext = createContext();

const initialNotificationState = {
  message: "",
  error: "",
};

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return { ...state, message: action.payload };
    case "CLEAR_NOTIFICATION":
      return { ...state, message: "" };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    notificationReducer,
    initialNotificationState
  );

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};
