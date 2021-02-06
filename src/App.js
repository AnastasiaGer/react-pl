import './App.css';
import React, {Component} from 'react';
import Car from './Car/Car'


export default class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2000},
      {name: 'Mazda', year: 2001},
      {name: 'Audi', year: 2002},
    ],
    pageTitle: 'React components',
    showCars: false
  }

  onChangeName (name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars: cars
    })
  }


  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({cars})

  }

toggleCarsHandler =() => {
  this.setState({
    showCars: !this.state.showCars
  })
}
  render() {
    let carsList = null

    if (this.state.showCars) {
      carsList = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={(event) => this.onChangeName(event.target.value, index)}
          />
        )
      })
    }
    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        { carsList}
      </div>
    );
  }
}

