import './App.css';
import Header from './components/header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Checkbox } from '@mui/material';


function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
 const addData = () => {
    
    if(task === ''){
      alert('Please enter task')
    } else {
      setTaskList([...taskList, task]);
      setTask('');
    }}
  return (
    <>
    <div className="App">
      <Header/>
      </div>
      <div className='form'>
         <TextField value={task} 
         onChange={(e) => setTask(e.target.value)}
         id="outlined-basic" label="Enter Task" variant="outlined" />
        <div className='add'>
         <Button onClick={addData} variant="contained" >Add</Button>
         </div>
      </div>
      

      </>
  );
}

export default App;
