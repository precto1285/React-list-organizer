import React from 'react';

const ToDo = props => {
  return (
    <div>
      <ul>
        <li>{props.office}</li>
        <li>{props.home}</li>
        <li>{props.dog}</li>
        <li>{props.friends}</li>
        <li>{props.family}</li>
      </ul>
    </div>
  )
}

export default ToDo;
