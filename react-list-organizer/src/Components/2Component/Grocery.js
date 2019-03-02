import React from 'react';

const Grocery = props => {
  return (
    <div>
      <h1> Grocery List:</h1>
      <ul>
        <li>{props.fruit}</li>
        <li>{props.starch}</li>
        <li>{props.meat}</li>
        <li>{props.vegetable}</li>
      </ul>
    </div>
  )
}

export default Grocery;