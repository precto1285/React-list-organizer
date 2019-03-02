import React from 'react';

const ToDo = props => {
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        <li><h3>To Do At Office: </h3><p>{props.office}</p></li>
        <li><h3>To Do At Home:</h3> <p>{props.home}</p></li>
        <li><h3>To Do With Dog:</h3> <p>{props.dog}</p></li>
        <li><h3>To Do With Friends:</h3> <p>{props.friends}</p></li>
        <li><h3>To Do With Family:</h3> <p>{props.family}</p></li>
      </ul>
    </div>
  )
}

export default ToDo;
