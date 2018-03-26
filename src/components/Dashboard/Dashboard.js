import React from "react";
import { Component } from "react";
import Chart from '../charts/Charts';
import Mystock from './stock-list/MyStock';
import Stocktable from './stock-list/StockTable';
import UserInfo from './UserInfo';
import Buy from './Buy';
import Sell from './Sell';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }


  render() {

    return (
      <div className="col-md-12 demo-div heading-section">
        <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Stocktable/>
        </div>
        <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <UserInfo/>
        </div>
       
        <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Mystock/>
        </div>
        <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Chart/>
        </div>
        
        

      </div>
    );
  }
}

export default Dashboard;
