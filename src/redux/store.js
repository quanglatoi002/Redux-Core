import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools();

//Create common store
const store = createStore(rootReducer, composeEnhancers);
export default store;
