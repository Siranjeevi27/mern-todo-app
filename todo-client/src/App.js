import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [task, setTask] = useState('');
  const [alltodo, setAlltodo] = useState(<></>);

  const dell = (id)=>{
    axios.get(`http://127.0.0.1:5500/delete/${id}`)
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err));
  }

  useEffect(()=>{
    axios.get('http://127.0.0.1:5500/')
    .then((res)=>{
      setAlltodo(res.data.tasks.map((obj)=><><h1>{obj.task}</h1> <button onClick={()=>dell(obj._id)}>Delete</button></>))
    })
    .catch((err)=>{
      console.log(err);
    });
  });

  const addtodo = ()=>{
    axios.post('http://127.0.0.1:5500/', {task: task})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
  }

  return (
    <div className="App">
      <input type="text" onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={addtodo}>Add Task</button>
      {alltodo}
    </div>
  );
}

export default App;
