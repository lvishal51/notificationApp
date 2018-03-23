import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Stocktable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        id: 1,
        name: "Product1",
        price: 120
      }, {
        id: 2,
        name: "Product2",
        price: 80
      }],
      isOpenModal: false
    };
  }

  cellButtonForBuy(cell, row) {
    return <button onClick={() => this.handleopenModal(row, 'Buy')}>Buy</button>;
  }
  cellButtonForSell(cell, row) {
    return <button onClick={() => this.handleopenModal(row, 'Sell')}>Sell</button>;
  }
  handleopenModal(row, buttonName) {
    this.setState({ isOpenModal: true, compName: buttonName });
  }
  handleCloseModal() {
    this.setState({ isOpenModal: false, compName: null });
  }
  render() {

    return (
      <div>
        <BootstrapTable data={this.state.products} version='4'>
          <TableHeaderColumn isKey dataField='id'>Stock ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Stock Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Stock Price</TableHeaderColumn>
          <TableHeaderColumn dataField='chart'>Stock Chart</TableHeaderColumn>
          <TableHeaderColumn dataField='' dataFormat={this.cellButtonForBuy}>Buy</TableHeaderColumn>
          <TableHeaderColumn dataField='' dataFormat={this.cellButtonForSell}>Sell</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Stocktable;
