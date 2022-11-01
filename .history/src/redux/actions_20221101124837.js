//object
// export const addTodoAction = {
//     type: "todoList/addTodo",
//     payload: { id: 1, name: "Learn PHP", completed: false, priority: "Medium" },
// };
//action creator

//--- todoList ---
export const addTodo = (data) => {
    //data => action creator
    return {
        type: "todoList/addTodo",
        payload: data,
    };
};

//---Filter Search---
export const searchFilterChange = (text) => {
    //data => action creator
    return {
        type: "filters/searchFilterChange",
        payload: text,
    };
};
//---Filter By Status---
export const statusFilterChange = (status) => {
    return {
        type: "filters/statusFilterChange",
        payload: status,
    };
};
//---Filter By Priority---
export const priorityFilterChange = (priorities) => {
    return {
        type: "filters/prioritiesFilterChange",
        payload: priorities,
    };
};
