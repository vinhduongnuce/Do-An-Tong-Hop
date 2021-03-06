import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from '../reducers/productReducer';
import cartReducer from '../reducers/cartReducer';
import alertReducer from '../reducers/alertReducer';
import loginReducer from '../reducers/loginReducer';
import registerReducer from '../reducers/registerReducer';
import detailReducer from '../reducers/detailReducer';
import userReducer from '../reducers/userReducer';
import ordersReducer from '../reducers/ordersReducer';
import categoryReducer from '../reducers/categoryReducer';
import searchReducer from '../reducers/searchReducer';
var redux = require('redux');   
const allReducers=redux.combineReducers({
    productReducer:productReducer,
    cartReducer:cartReducer,
    alertReducer:alertReducer,
    loginReducer:loginReducer,
    registerReducer:registerReducer,
    detailReducer:detailReducer,
    userReducer:userReducer,
    ordersReducer:ordersReducer,
    categoryReducer:categoryReducer,
    searchReducer:searchReducer,
})
var store=createStore(allReducers,applyMiddleware(thunk)); 


export default store

