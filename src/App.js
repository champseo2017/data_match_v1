import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch(error => {
        console.log(error)
       });
     
  }
 
  render() {
    const todoItems = this.state.persons.map((person , index) =>
    // Only do this if items have no stable IDs
    <li key={index}>
      <span>{index +1} {person.name}</span>
    </li>
    );
    return (
      <ul>
        {todoItems}
      </ul>
    );
  }
}

export default App;
