
import React from "react";
import QuoutesDatabase from "./components/QuotesDatabase";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: QuoutesDatabase[this.randomNumber()],
    };
    this.previousNum = -1;
  }

  randomNumber = () => {
    return Math.floor(Math.random() * QuoutesDatabase.length);
  };

  randomQuote = () => {
    let random = this.randomNumber();
    while (random == this.previousNum) {
      random = this.randomNumber();
      console.log(random, this.previousNum);
    }
    this.previousNum = random;
    this.setState({
      quotes: QuoutesDatabase[random],
    });
  };

  render() {
    return (
      <div class="tc ph4">
        <h1>Quote: {this.state.quotes.quote}</h1>
        <p>-Author: {this.state.quotes.author.length === 0 ? "Anonymous" : this.state.quotes.author}</p>
        <button class="f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-gray" onClick={this.randomQuote}>
          New Quote
        </button>
      </div>
    );
  }
}

export default App;