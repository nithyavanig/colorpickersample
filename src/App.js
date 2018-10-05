import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SketchPicker } from 'react-color';
//import Palette from '@material-ui/icons/es';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      defaultValue: '#9999'      
    };    
    this.handleChangeComplete =this.handleChangeComplete.bind(this);   
  }  
  handleChangeComplete = (color) => {
    debugger
    this.setState({ defaultValue: color.hex });
  };  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         <SketchPicker   
            color={ this.state.defaultValue }         
            onChangeComplete={ this.handleChangeComplete }
          />       
         <label>{this.state.defaultValue}</label>
        </p>
      </div>
    );
  }
}

export default App;
