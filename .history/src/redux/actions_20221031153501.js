//object
// export const addTodoAction = {
//     type: "todoList/addTodo",
//     payload: { id: 1, name: "Learn PHP", completed: false, priority: "Medium" },
// };
//action creator

export const addTodo = (data) => {
    //data => action creator
    return {
        type: "todoList/addTodo",
        payload: data,
    };
};

export const searchFilterChange = (text) => {
    //data => action creator
    return {
        type: "filters/searchFilterChange",
        payload: text,
    };
};
