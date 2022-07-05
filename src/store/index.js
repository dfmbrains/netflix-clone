import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import account from './reducers/account';
import categories from './reducers/categories';
import content from './reducers/content';
import likes from './reducers/likes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    account,
    categories,
    content,
    likes
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;