import React from "react";
import TodoList from "./TodoList";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
