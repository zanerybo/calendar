
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Calendar from 'react-calendar';
function App() {
  class MyApp extends Component {
    state = {
      date: new Date(),
    }
  
    onChange = date => this.setState({ date })
  
    render() {
      return (
        <div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      );
    }
}
}

export default App;
