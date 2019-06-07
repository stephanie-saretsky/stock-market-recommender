import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "",
      social: "",
      price: 0,
      counts: 0
    };
  }

  stockPriceGenerator = (symbol, dates) => {
    //fetch from backend using Symbol + Dates - API like Alpha Advantage
    let stockPrice = [];
    //create array with daily stock price based on time span
    for (let i = 0; i < dates; i++) {
      let d = Math.floor(Math.random() * (50 - 15 + 1) + 15);
      stockPrice.push(d);
    }
    console.log(stockPrice, "STOCK PRICE");
    this.props.dispatch({ type: "daily-price", value: stockPrice });
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
    this.props.dispatch({ type: "stock-price", value: endPrice });
  };

  socialMediaCountGenerator = (symbol, social) => {
    // fetch from backend - send Symbol plus given social network which will return post number
    //future feature to evaluate negative posts from positive
    let postNumber = Math.floor(Math.random() * 20 + 1);
    this.setState({ counts: postNumber });
    this.props.dispatch({ type: "socialMedia-counts", value: postNumber });
  };

  recommendationAlgorithm = (price, counts) => {
    console.log(price, "PRICE", counts, "COUNTS");
    if (counts > 10 && 30 < price < 50) {
      this.props.dispatch({ type: "rating", value: "Sell" });
    } else if (counts > 10 && 20 < price < 30) {
      this.props.dispatch({ type: "rating", value: "Hold" });
    } else if (counts < 10 || 15 < price < 20) {
      this.props.dispatch({ type: "rating", value: "Buy" });
    }
    this.props.dispatch({ type: "symbol", value: this.state.symbol });
  };

  handleSymbol = event => {
    console.log(event.target.value);
    let newInput = event.target.value;
    this.setState({ symbol: newInput });
  };

  //   handlePurchase = event => {
  //     console.log(event.target.value);
  //     let newInput = event.target.value;
  //     this.setState({ purchase: newInput });
  //   };

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
    setTimeout(
      this.recommendationAlgorithm(this.state.price, this.state.counts),
      100000
    ); // push to store after
    this.setState({ symbol: "" });
  };

  // form with inputs for: stock symbol, social network, time window (Default 10 days)
  render = () => {
    return (
      <div>
        <h3 className="form-title">Should You Buy, Sell, or Hold?</h3>
        <h4 className="sub-title">
          Analysis of Social Media on Stock Performance
        </h4>
        <form className="stock-form" onSubmit={this.handleSubmit}>
          <label htmlFor="symbolInput">Stock Symbol:</label>
          <input
            id="symbolInput"
            name="stock symbol"
            type="text"
            value={this.state.symbol}
            onChange={this.handleSymbol}
          />
          <label htmlFor="social">Social Network:</label>
          <select id="social" name="social" ref={this.socialRef}>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
          </select>
          <label htmlFor="dates">Time Span</label>
          <select id="dates" name="dates" ref={this.dateRef}>
            <option value="10">10 Days</option>
            <option value="9">9 Days</option>
            <option value="8">8 Days</option>
            <option value="7">7 Days</option>
            <option value="9">6 Days</option>
            <option value="5">5 Days</option>
          </select>
          {/* <label htmlFor="purchase">Purchase Price:</label>
          <input
            id="purchase"
            name="purchase price"
            type="text"
            className="input"
            onChange={this.handlePurchase}
          /> */}
          <input className="submit" type="submit" value="submit" />
        </form>
      </div>
    );
  };
}

let Form = connect()(UnconnectedForm);

export default Form;
