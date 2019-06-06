import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedTable extends Component {
  render = () => {
    console.log(this.props.rating, "RATING");
    console.log(this.props.price, "PRICE");
    console.log(this.props.rec, "REC");
    let stocks = this.props.daily.join(", ");
    return (
      <div>
        <div className="table1">
          <p className="tableLabel">Social Media Posts</p>
          <p className="tableLabel">Daily Closing Price ($)</p>
          <p className="counts">{this.props.social}</p>
          <p className="stockArray">{stocks}</p>
        </div>
        <div className="table2">
          <p className="tableLabel">Stock Symbol</p>
          <p className="tableLabel">Today's Closing Price ($)</p>
          <p className="tableLabel">Recommendation</p>
          <p className="stock">{this.props.stock}</p>
          <p className="price">{this.props.price}</p>
          <p className="rating">{this.props.rating}</p>
        </div>
      </div>
    );
  };
}

//if this.props.rating === "buy" display this, etc

let mapStateToProps = state => {
  return {
    rating: state.rating,
    price: state.price,
    stock: state.symbol,
    social: state.counts,
    daily: state.daily
  };
};

let Table = connect(mapStateToProps)(UnconnectedTable);

export default Table;
