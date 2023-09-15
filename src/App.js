/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments
 * in the code for some help on accomplishing this one
 *
 * Challenge:
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import "./style.css";
import AddModal from "./AddModal";
import { v4 } from "uuid";

const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [todos, setTodos] = React.useState([]);
  const handleChange = (id) => {
    setTodos((prevState) => {
      const updatedTodos = prevState.map((todo) => {
        if (todo.id === id) {
          todo = {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
      return updatedTodos;
    });
  };
  const addTodo = (item) => {
    setTodos((prevState) => {
      return [...prevState, item];
    });
    handleClose();
  };
  const deleteTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="todo-list">
      <AddModal open={open} handleClose={handleClose} onItemAdd={addTodo} />
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
        />
      ))}
      <button
        onClick={handleOpen}
        style={{
          marginTop: "15px",
          marginBottom: "10px",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "gray",
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default App;
