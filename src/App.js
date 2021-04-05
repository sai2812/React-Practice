import { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    person: "saichaitanya"
  }

  swtichHandler = (event) => {
    this.setState({
      person: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>I am new to App js</h1>
        <Person name={this.state.person}></Person>
        <Person name={this.state.person}></Person>
        <Person name="Fixed value"></Person>
        <UserOutput changed={this.swtichHandler} CurrentValue={this.state.person}></UserOutput>
      </div>
    );
  }
}

export default App;
