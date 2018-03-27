import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InputModal from '../../modal/InputModal';
import MockData from '../../../mockData.json';
import Constants from "../../../common/Constants";



class Stocktable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      list: [],
      selectedCandidate:{}
    };
    this.cellButtonForBuy = this.cellButtonForBuy.bind(this);
    this.cellButtonForSell = this.cellButtonForSell.bind(this);
  }
  cellButtonForBuy(cell, row) {
    return <button className="buysellbtn bluecolor" onClick={() => this.handleopenModal(row, 'Buy')}>B</button>;
  }
  cellButtonForSell(cell, row) {      
    return <button className="buysellbtn orangecolor" onClick={() => this.handleopenModal(row, 'Sell')}>S</button>;
  }
  handleopenModal(row, buttonName) {     
    this.setState({ isOpenModal: true,  selectedCandidate: row, compName: buttonName });
  }
  handleCloseModal() {
    this.setState({ isOpenModal: false, selectedCandidate: {}, compName: null });
  }
  componentDidMount = () => {

    /*     let URL = Constants.URL;
    var self = this;
    fetch(URL)
      .then(function (response) {
        let myData = response.json();
        return myData;
      })
      .then(function (json) {
        self.setState({ list: json });
      });
 */      
      this.setState({ list : MockData.stockData })
  };
  render() {

    return (
      <div>
        <BootstrapTable data={this.state.list}  bodyStyle={ { textTransform: 'uppercase', fontSize:'13px' } } headerStyle={ { background: '#515050', color:'white', fontSize:'15px'} } hover={true} striped={true} search searchPlaceholder="Search" version='4' pagination>
          <TableHeaderColumn isKey hidden={true} dataField='id'>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='stockprize'>Price</TableHeaderColumn>
          <TableHeaderColumn dataField='chart'> Chart</TableHeaderColumn>
          <TableHeaderColumn dataField='' dataAlign="center" dataFormat={this.cellButtonForBuy}>Buy</TableHeaderColumn>
          <TableHeaderColumn dataField='' dataAlign="center" dataFormat={this.cellButtonForSell}>Sell</TableHeaderColumn>
        </BootstrapTable>
        
        <InputModal modalIsOpen={this.state.isOpenModal} compName={this.state.compName} 
        data={this.state.selectedCandidate} handleCloseModal={this.handleCloseModal.bind(this)}        
        />     
      </div>
    );
  }
}

export default Stocktable;
