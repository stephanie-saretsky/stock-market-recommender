import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "",
      social: "",
      dates: 0,
      price: 0,
      counts: 0,
      purchase: 0
      //risk ratio should be calculated
      //constants like inflation and interest rates
    };
  }

  stockPriceGenerator = (symbol, dates) => {
    //fetch from backend using Symbol + Dates - API like Alpha Advantage
    let stockPrice = [];
    //create array with daily stock price based on time span
    for (let i = 0; i < dates; i++) {
      let d = Math.floor(Math.random() * 100 + 1);
      stockPrice.push(d);
    }
    console.log(stockPrice, "STOCK PRICE");
    //find the average for the recommendation
    let sum = 0;
    for (let i = 0; i < stockPrice.length; i++) {
      sum += stockPrice[i];
    }
    console.log(sum, "SUM");
    let avg = sum / stockPrice.length;
    console.log(avg, "AVG");
    this.setState({ price: avg });
    //push the price of the last day to store
    let endPrice = stockPrice[stockPrice.length - 1];
    this.props.dispatch({ type: "stock-price", price: endPrice });
  };

  socialMediaCountGenerator = (symbol, social) => {
    // fetch from backend - send Symbol plus given social network which will return post number
    let postNumber = Math.floor(Math.random() * 50 + 1);
    this.setState({ counts: postNumber });
    this.props.dispatch({ type: "socialMedia-counts", counts: postNumber });
  };

  recommendationAlgorithm = (price, counts) => {};

  handleSymbol = event => {
    console.log(event.target.value);
    let newInput = event.target.value;
    this.setState({ symbol: newInput });
  };

  handlePurchase = event => {
    console.log(event.target.value);
    let newInput = event.target.value;
    this.setState({ purchase: newInput });
  };

  handleSubmit = event => {
    event.preventDefault();
    let symbol = this.state.symbol;
    let dates = parseFloat(document.getElementById("dates").value);
    let social = document.getElementById("social").value;
    console.log(symbol, social, dates, "REFS");

    //stock price and social media are mock data from backend. use math.random
    this.stockPriceGenerator(symbol, dates); // push to store after
    this.socialMediaCountGenerator(symbol, social); // push to store after

    //recommendation takes the results of the other 2 functions as the arguments
    this.recommendationAlgorithm(this.state.price, this.state.counts); // push to store after
  };

  // form with inputs for: stock symbol, social network, time window (Default 10 days)
  render = () => {
    return (
      <div>
        <h3 className="form-title">
          Compare Stock Price and Social Media Posts
        </h3>
        <h4>Get Recommendation on Buy/Sell/Hold</h4>
        <form className="stock-form" onSubmit={this.handleSubmit}>
          <label htmlFor="symbolInput">Stock Symbol:</label>
          <input
            id="symbolInput"
            name="stock symbol"
            type="text"
            onChange={this.handleSymbol}
          />
          <label htmlFor="social">Social Network:</label>
          <select id="social" name="social" ref={this.socialRef}>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
          </select>
          <label htmlFor="dates">Time Span To Compare:</label>
          <select id="dates" name="dates" ref={this.dateRef}>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="9">6</option>
            <option value="5">5</option>
          </select>
          <label htmlFor="purchase">Purchase Price:</label>
          <input
            id="purchase"
            name="purchase price"
            type="text"
            className="input"
            onChange={this.handlePurchase}
          />
          <input className="submit" type="submit" value="submit" />
        </form>
      </div>
    );
  };
}

export default Form;
