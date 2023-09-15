/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */
import React from "react";
import "./style.css";

const textContainerStyle = {

  display: "flex",
  flexDirection: "column",
}
const textRowStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginLeft:"5px"
}
const titleStyle = {
  fontWeight: "bold",
  marginRight:"2px"
}
function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
        style={{alignSelf:"flex-start"}}
      />
      <div style={textContainerStyle}>
        <div style={textRowStyle}> 
          <p style={titleStyle}>Task Name:  </p>
          <p>{props.item.task}</p>
        </div>
        <div style={textRowStyle}>
          <p style={titleStyle}>Priority: </p>
          <p>{props.item.priority}</p>
        </div>
        <div style={textRowStyle}>
          <p style={titleStyle}>Timely completion priority:</p>
          <p>{props.item.timely}</p>
        </div>
        <div style={textRowStyle}>
          <p style={titleStyle}>Due Date: </p>
          <p>{props.item.dueDate}</p>
        </div>
        <div style={textRowStyle}>
          <p style={titleStyle}>Completions Estimation (in days): </p>
          <p>{props.item.estimation}</p>
        </div>
      </div>

      <button
        style={{
          border: "none",
          backgroundColor: "#F44336",
          padding: "10px",
          borderRadius: "5px",
          alignSelf: "flex-end",
          marginBottom: "10px",
          marginLeft:"auto"
        }}
        onClick={() => props.deleteTodo(props.item.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
