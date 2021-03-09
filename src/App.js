import React from 'react';
import './App.css';
import {Button,Input} from 'reactstrap';

export default function App(){
  return(
  <div>
    <div className="header">
      Todo App
    </div>
	<div className="form">
	<Input/>
	<Button className="btn-md btn-block btn-light Add">Add Todo</Button>
	<Button className="btn-md btn-block btn-dark Delete">Delete Todo</Button>
	</div>
	</div>
  )
}