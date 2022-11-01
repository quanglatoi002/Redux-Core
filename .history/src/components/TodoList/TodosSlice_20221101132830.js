const initState = [
    { id: 1, name: "Learn PHP", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn ReactJs", completed: false, priority: "Low" },
];
const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload];
        case "todoList/toggleTodoStatus":
            return [...state, !action.completed];
        default:
            return state;
    }
};

export default todoListReducer;
