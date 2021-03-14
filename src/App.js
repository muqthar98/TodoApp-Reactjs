import React,{useState} from 'react';
import './App.css';
import {Button,Input} from 'reactstrap';
import { Button,InputLabel,Input,FormControl } from '@material-ui/core';

export default function App(){

  const[todos,setTodos] = useState("");
  const[input,setInput] = useState("");

  const addTodo = {event}{
    setTodos([...todos,input]);
  }

  }
  return(
  <div>
    <div className="header">
      Todo App
    </div>
	<FormControl>
  <InputLabel>Todo</InputLabel>
  <Input value={input} onChange={event => setInput[event.target.value]}/>
	<Button onClick={addTodo} className="btn-md btn-block btn-light Add">Add Todo</Button>
	<Button className="btn-md btn-block btn-dark Delete">Delete Todo</Button>
  </FormControl>
  <div>
    <ul>
      {todos.map(todo=>(
       <li>{todo}</li>
      ))}
      
    </ul>
  </div>
	</div>
 
  )
}
