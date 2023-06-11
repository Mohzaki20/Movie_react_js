import { legacy_createStore as createStore } from "redux";
import Reducer from "./reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ReducerMovie from "./reducers/movies";

// use "ReducerMovie" instead of "Reducer" when run redux-thunk

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
