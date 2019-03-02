import React from 'react';

const Grocery = props => {
  return (
    <div>
      <h1> Grocery List:</h1>
      <ul>
        <li><h3>Fruit Item:</h3> <p>{props.fruit}</p></li>
        <li><h3>Starch Item:</h3> <p>{props.starch}</p></li>
        <li><h3>Meat Item:</h3> <p>{props.meat}</p></li>
        <li><h3>Vegetable Item:</h3> <p>{props.vegetable}</p></li>
      </ul>
    </div>
  )
}

export default Grocery;