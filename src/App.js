import "./App.css";
import Header from "./components/header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Checkbox } from "@mui/material";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addData = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("Please enter task");
    } else {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);
  };

  return (
    <>
      <div className="App">
        <Header />
      </div>
      <form className="form" onSubmit={addData}>
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          id="outlined-basic"
          label="Enter Task"
          variant="outlined"
        />
        <div className="add">
          <Button type="submit" variant="contained">
            Add
          </Button>
        </div>
      </form>
      <div className="task-list-head">
        <h1>Task List</h1>
        <h1>Done</h1>
        <h1>Delete</h1>
      </div>
      <table className="task-table">
        <tbody>
          {taskList.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td>
                <Checkbox />
              </td>
              <td>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
