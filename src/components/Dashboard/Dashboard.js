import React from "react";
import { Component } from "react";
import Chart from '../charts/Charts';
import Mystock from '../Dashboard/stock-list/MyStock';
import Stocktable from '../Dashboard/stock-list/StockTable';
import UserInfo from '../Dashboard/UserInfo';
import Buy from '../Dashboard/Buy';
import Sell from '../Dashboard/Sell';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {

    return (
      <div className="col-md-12 col-lg-12 demo-div heading-section">
        <div className="row">
          <div className="header-left col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <div>
              <Stocktable />
            </div>
          </div>
          <div className="header-right col-xs-12 col-sm-12 col-md-7 col-lg-7">

            <a href="/" className="logo">
              <img src="kite-logo.svg" alt="Kite logo" />
            </a>
            <div className="app-nav">
              <a href="/chart/NSE/BANDHANBNK/dashboard" className="">
                <span>Dashboard</span>
              </a>
              <a href="/chart/NSE/BANDHANBNK/orders" className="">
                <span>Orders</span>
              </a>
              <a href="/chart/NSE/BANDHANBNK/holdings" className="">
                <span>Holdings</span>
              </a>
              <a href="/chart/NSE/BANDHANBNK/margins" className="">
                <span>Funds</span>
              </a>
              <a href="/chart/NSE/BANDHANBNK/apps" className="">
                <span>Apps</span>
              </a>
            </div>
            <div className="right-nav">
              <div className="user-nav">
                <span>YK2729</span>
              </div>
            </div>
            <div>
              <Chart />
            </div>
            {/* <LineChart/>      */}
          </div>
        </div>





        {/* <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <UserInfo/>
        </div>       
        <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Mystock/>
        </div>
        <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Chart/>
        </div> */}



      </div>
    );
  }
}

export default Dashboard;
