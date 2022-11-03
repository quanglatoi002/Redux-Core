import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoSlice from "../components/TodoList/todosSlice";

const store = configureStore({
    // get a object with a filters is reducer then in reducer
    //two reducer: 1.filters save back state of we
    //vd : Search => "PHP", Status ="All", Priority{Medium} => it's save filters
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoSlice.reducer,
    },
});

export default store;
