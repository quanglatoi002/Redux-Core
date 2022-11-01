import { createSelector } from "@reduxjs/toolkit";

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
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, priorities) => {
        return todoList.filter((todo) => {
            // when the use select status === 'ALL'
            // and priorities = 0 then it'is just return result searchText
            if (status === "All") {
                return priorities.length
                    ? todo.name.includes(searchText) &&
                          priorities.includes(todo.priority)
                    : todo.name.includes(searchText);
            }
            return (
                // if status !== "All"
                // status === "Completed" return the complete = true and opposite return (status todo)
                // and priorities != 0 then check todo.priority["Medium "] have including in priorities["Medium"]
                // opposite "return true" to keep the previous value
                todo.name.includes(searchText) &&
                (status === "Completed" ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            );
        });
    }
);
