import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import {recoveryStore} from '../utils/store'

type windowWithReduxExtension = Window & typeof globalThis & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
}

const composeEnhancers = (window as windowWithReduxExtension).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const originState = recoveryStore()
// @ts-ignore
const store = createStore(reducer, originState, composeEnhancers(applyMiddleware(thunk)))

export default store;
