import { applyMiddleware, legacy_createStore as createStore } from "redux";
import globalReducer from "./reducer/reducer";
import thunk from 'redux-thunk'

const store = createStore(globalReducer, applyMiddleware(thunk))

export default store;