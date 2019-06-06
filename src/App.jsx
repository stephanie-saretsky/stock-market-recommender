import React, { Component } from "react";
import Form from "./Form.jsx";
import Header from "./Header.jsx";
import Table from "./Table.jsx";
import Footer from "./Footer.jsx";

class App extends Component {
  render = () => {
    return (
      <div>
        <Header />
        <div className="global">
          <Form />
          <Table />
        </div>
        <Footer />
      </div>
    );
  };
}

export default App;
