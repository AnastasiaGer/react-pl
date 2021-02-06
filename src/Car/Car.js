import React from 'react'
import './Car.css'

export default props => {
const inputClasses=['input']

if(props.name !== '') {
  inputClasses.push('green')
} else {
  inputClasses.push('red')
}

if(props.name.length > 4) {
  inputClasses.push('bold')
} 

const style = {
  boxShadow: '0px 5px 15px rgba(0, 1, 1, 0.2)',
  border: '1px solid #ccc'
}

  return(
    <div className="Car" style={style}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input className={inputClasses.join(' ')} type="text" onChange={props.onChangeName} value={props.name} />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

