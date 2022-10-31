//object
// export const addTodoAction = {
//     type: "todoList/addTodo",
//     payload: { id: 1, name: "Learn PHP", completed: false, priority: "Medium" },
// };
//action creator
export const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data,
    };
};
