import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import {cardsReducer} from "./reducers/cardsReducer";


export const store = createStore(combineReducers({
    cards: cardsReducer
}), composeWithDevTools(applyMiddleware(thunk)))

