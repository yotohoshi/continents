import React from "react";
import { continetData, data } from "./data.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firInput: "",
      secInput: "",
      continents: [],
      countries: []
    };
  }

  handleChange = e => {
    let filerData = [];
    let inputValue = e.target.value;
    for (let item of continetData) {
      if (inputValue !== "" && item.toLowerCase().includes(inputValue)) {
        filerData.push(item);
      }
    }
    this.setState({
      firInput: inputValue,
      continents: filerData
    });
  };

  handleSecInput = e => {
    this.setState({
      secInput: e.target.value
    });
  };

  handleClick = e => {
    let filterCountry = [];
    for (let obj of data) {
      if (obj.continent === e.target.value) {
        for (let item of obj.countries) {
          filterCountry.push(item.name);
        }
      }
    }
    this.setState({
      countries: filterCountry
    });
  };

  render() {
    return (
      <div>
        {"Continent"}
        <div>
          <input onChange={this.handleChange} value={this.state.firInput} />
          <ul>
            {this.state.continents.map(item => {
              return (
                <li key={item}>
                  <button onClick={this.handleClick} value={item}>
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {"Country"}
        <div>
          <input onChange={this.handleSecInput} value={this.state.secInput} />
          {this.state.countries.map(item => {
            if (item.toLowerCase().includes(this.state.secInput)) {
              return <li key={item}>{item}</li>;
            } else return null;
          })}
        </div>
      </div>
    );
  }
}

export default App;
