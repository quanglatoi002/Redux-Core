import { createSelector } from "reselect";

// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state);
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search);
//     });
//     return todoRemaining;
// };
// reselect

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritySelector
    (todoList, status, searchText) => {
        return todoList.filter((todo) => {
            if (status === "All") {
                return todo.name.includes(searchText);
            }
            return (
                todo.name.includes(searchText) &&
                (status === "Completed" ? todo.completed : !todo.completed)
            );
        });
    }
);
