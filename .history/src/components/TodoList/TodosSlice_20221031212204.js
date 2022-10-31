const initState = [
    { id: 1, name: "Learn PHP", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn ReactJs", completed: false, priority: "Low" },
];
const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return {
                ...state, //take all data
                //overwrite todoList
                todoList: [...state.todoList, action.payload],
            };
        case "filters/searchFilterChange":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload,
                },
            };
        default:
            return state;
    }
};

export default todoListReducer;
