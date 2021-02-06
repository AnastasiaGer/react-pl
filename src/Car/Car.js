import React from 'react';


export default (props) => (
  <div>
    <h2>Car name:  {props.name}</h2>
    <p>Car year: {props.year}</p>
    <button onClick = {props.onChangeTitle}>Click</button>
  </div>
  )


