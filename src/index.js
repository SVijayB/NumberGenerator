import logo from './logo.svg';
import './index.scss';
import ReactDOM from 'react-dom';
import React, { Component } from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
class NumGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 6,
      number: 1,
      themeName: "TechEden!"
    }
  }

  componentDidMount() {
   this.setState({ number: this.generateNumber(this.state.min, this.state.max)})
  }
  
  minChange = (event) => {
    this.setState({ min: event.target.value})
  }
  
  maxChange = (event) => {
    this.setState({ max: event.target.value})
  }
  
  generateNumber = (min, max) => {
    const x = Math.floor(Math.random()*Number(max-min+1))+Number(min)
    if(x === 1){
      this.setState({themeName: "Fintech"})
    }
    else if(x === 2){
      this.setState({themeName: "Automation Tools"})
    }
    else if(x === 3){
      this.setState({themeName: "Healthtech"})
    }
    else if(x === 4){
      this.setState({themeName: "Transport"})
    }
    else if(x === 5){
      this.setState({themeName: "Space"})
    }
    else if(x === 6){
      this.setState({themeName: "Education"})
    }
  }
  
  getInputs = () => {
    if(this.state.min > this.state.max ){
      const minTemp = this.state.min
      const maxTemp = this.state.max
      this.setState(
      { 
        min: maxTemp,
        max: minTemp
      }, () =>
        this.setState({
          number: this.generateNumber(this.state.min, this.state.max)  
        })
      );
    } else {
      this.setState({
        number: this.generateNumber(this.state.min, this.state.max)  
      })
    }
  }
  
  render() {
    return (
      <div id="generator">
        <div id="title">Random Theme Picker</div>
        <p id="rNum">{ this.state.themeName }</p>
        <div id="inputContainer">
          <div id="headers"> 
            <p>Min</p>
            <p>Max</p>
          </div>
          <div id="inputs">
            <input id="min" min="-9999999999" max="9999999999" type="number" value={ this.state.min } onChange={this.minChange} />
            <input id="max" min="-9999999999" max="9999999999" type="number" value={ this.state.max } onChange={this.maxChange} />
            <input id="generate" type="submit" value="Generate Number" onClick={ this.getInputs }/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <NumGenerator />,
  document.getElementById('root')
);

export default App;
