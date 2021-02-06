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

changeTitleHandler = (newTitle) => {
  this.setState({
    pageTitle: newTitle
  })
}

toggleCarsHandler =() => {
  this.setState({
    showCars: !this.state.showCars
  })
}





  render() {
    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        )
      })
    }
    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        { cars}
      </div>
    );
  }
}

