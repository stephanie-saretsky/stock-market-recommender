import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedTable extends Component {
  render = () => {
    console.log(this.props.rating, "RATING");
    console.log(this.props.price, "PRICE");
    console.log(this.props.rec, "REC");
    return (
      <div>
        I will be a table with {this.props.stock} and {this.props.price}
        this is my {this.props.rating}
      </div>
    );
  };
}

//if this.props.rating === "buy" display this, etc

let mapStateToProps = state => {
  return { rating: state.rating, price: state.price, stock: state.symbol };
};

let Table = connect(mapStateToProps)(UnconnectedTable);

export default Table;
