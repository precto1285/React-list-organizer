import React from 'react';

const ToDo = props => {
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        <li>To Do At Office: {props.office}</li>
        <li>To Do At Home: {props.home}</li>
        <li>To Do With Dog: {props.dog}</li>
        <li>To Do With Friends: {props.friends}</li>
        <li>To Do With Family: {props.family}</li>
      </ul>
    </div>
  )
}

export default ToDo;
