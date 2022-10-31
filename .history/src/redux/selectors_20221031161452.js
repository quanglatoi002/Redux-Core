// export const todoListSelector = (state) => state.todoList;
export const todoListSelector = (state) => {
    const todoRemaining = state.todoList.filter((todo) => {
        return todo.name.includes(state.filters.search);
    });
    return state.todoList;
};

export const searchTextSelector = (state) => state.filters.search;
