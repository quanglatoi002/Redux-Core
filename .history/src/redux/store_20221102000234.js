// import { legacy_createStore as createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers = composeWithDevTools();

// //Create common store
// const store = createStore(rootReducer, composeEnhancers);
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todosSlice";

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        todoList: todoListReducer,
    },
});

export default store;