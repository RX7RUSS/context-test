import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MyContext = React.createContext();

class MyProvider extends Component {
  state= {
    name: 'Russ',
    age: 40,
    male: true
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
        age:  this.state.age + 1
        })
      }} >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


class Person extends Component {
  render() {
    return (
      <div className="Person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p> Age: {context.state.age} </p>
              <p> Name: {context.state.name} </p>
              <button onClick={context.growAYearOlder}>Get Older</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {


  render() {
    return (
      <MyProvider>
      <div className="App">
        <p> This is the App text! </p>
        <Person />
      </div>
      </MyProvider>
    );
  }
}

export default App;
