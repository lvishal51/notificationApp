import React from "react";
import { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../charts/Charts';
import Mystock from '../Dashboard/stock-list/MyStock';
import Stocktable from '../Dashboard/stock-list/StockTable';
import UserInfo from '../Dashboard/UserInfo';
import Buy from '../Dashboard/Buy';
import Sell from '../Dashboard/Sell';
import getStocks from '../../actions/actions'

const mapStateToProps = function (store) {
	return { stocks: store.stocks.stocks }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getStocks: getStocks,
	}, dispatch);
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount() {
		this.props.getStocks();
	}

  componentWillReceiveProps(nextProps) {
		this.setState({
			data: nextProps.stocks
		});
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
{/*         <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Chart/>
        </div>
 */}        
        

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
