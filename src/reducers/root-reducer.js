import { combineReducers } from 'redux';
import StockReducer from './stock-reducer'
import LoginReducer from './login-reducer'

const rootReducer = combineReducers({
    loginDetails: LoginReducer,
    stocks: StockReducer
});
export default rootReducer;