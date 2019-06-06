import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedTable extends Component {
  render = () => {
    return (
      <div>
        I will be a table with {this.props.rating} and {this.props.price}
        this is my {this.props.rec}
      </div>
    );
  };
}

//if this.props.rating === "buy" display this, etc

let mapStateToProps = state => {
  return { rating: state.rating, stockPrice: state.price, rec: state.rating };
};

let Table = connect(mapStateToProps)(UnconnectedTable);

export default Table;
