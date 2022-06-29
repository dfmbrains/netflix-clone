import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import account from './reducers/account';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    account
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;