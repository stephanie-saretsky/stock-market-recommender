import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedTable extends Component {
  render = () => {
    let stocks = this.props.daily.join(", ");
    return (
      <div>
        <table className="table2">
          <tfoot>
            <tr>
              <td>Recommendation</td>
              <td>{this.props.rating}</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Symbol</td>
              <td>{this.props.stock}</td>
            </tr>
            <tr>
              <td>Closing Price ($)</td>
              <td>{this.props.price}</td>
            </tr>
            <tr>
              <td>Social Media Count</td>
              <td>{this.props.social}</td>
            </tr>
          </tbody>
        </table>
        <div className="row">
          <p className="rowLabel">Daily Closing Price Within Time Span ($)</p>
          <p className="stockArray">{stocks}</p>
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
