import React from 'react';

const Grocery = props => {
  return (
    <div>
      <h1> Grocery List:</h1>
      <ul>
        <li>Fruit Item: {props.fruit}</li>
        <li>Starch Item: {props.starch}</li>
        <li>Meat Item: {props.meat}</li>
        <li>Vegetable Item: {props.vegetable}</li>
      </ul>
    </div>
  )
}

export default Grocery;