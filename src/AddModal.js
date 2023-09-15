import React from "react";
import "./style.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { v4 } from "uuid";
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const AddModal = ({ onItemAdd, open, handleClose }) => {
  const [task, setTask] = React.useState("");
  const [priority, setPriority] = React.useState("High");
  const [timely, setTimely] = React.useState("High");
  const [estimation, setEstimation] = React.useState(0);
  const [dueDate, setDueDate] = React.useState(new Date().toLocaleDateString());
  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={modalStyle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        style={{
          backgroundColor: "#fff",
          width: "50%",
          height: "8auto",
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
        }}
      >
        <h3>Add Task</h3>
        <label style={{ marginTop: "10px", marginBottom: "10px" }}>
          Task name:
        </label>

        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          name="task"
          style={{ marginTop: "10px", marginBottom: "10px", padding: "5px" }}
        />
        <label for="cars" style={{ marginTop: "10px", marginBottom: "10px" }}>
          Importance of completion:
        </label>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          name="priority"
          id="priority"
          defaultValue={"High"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label for="cars" style={{ marginTop: "10px", marginBottom: "10px" }}>
          Importance of timely completion:
        </label>

        <select
          name="timely"
          value={"High"}
          onChange={(e) => setTimely(e.target.value)}
          id="timely"
          defaultValue={timely}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label style={{ marginTop: "10px", marginBottom: "10px" }}>
          Estimate of time required
        </label>
        <input
          type="number"
          value={estimation}
          onChange={(e) => setEstimation(e.target.value)}
          name="estimation"
          style={{ marginTop: "10px", marginBottom: "10px", padding: "5px" }}
        />
        <label>Due date (in days)</label>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          defaultValue={new Date().toLocaleDateString()}
          onChange={(e) => setDueDate(e.target.value)}
          style={{ marginTop: "10px", marginBottom: "10px", padding: "10px" }}
        />
        <button
          style={{ marginTop: "10px", marginBottom: "10px", padding: "10px" }}
          onClick={() => {
            onItemAdd({
              id: v4(),
              task,
              priority,
              timely,
              estimation,
              dueDate,
              completed: false,
            });
            setTask("");
            setPriority("High");

            setTimely("High");
            setEstimation(0);
            setDueDate(new Date().toLocaleDateString());
          }}
        >
          Add
        </button>
        <button
          style={{ marginTop: "10px", marginBottom: "10px", padding: "10px" }}
          onClick={handleClose}
        >
          Cancel
        </button>
      </Box>
    </Modal>
  );
};

export default AddModal;
