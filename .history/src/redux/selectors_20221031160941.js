// export const todoListSelector = (state) => state.todoList;
export const todoListSelector = (state) => {
    const todoRemaining = state.todoList.filter(() => {});
    return state.todoList;
};

export const searchTextSelector = (state) => state.filters.search;
