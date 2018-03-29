import MockData from '../mockData.json';

const StockReducer = (state = {}, action) => {

    switch (action.type) {
        case "GET_STOCKS":
            return Object.assign({}, state, {
                "stocks": MockData.stockData
            });        
        default:
            return state;
    }

}

export default StockReducer;