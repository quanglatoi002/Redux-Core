const initState = {
    filters: {
        search: "",
        status: "All",
        priority: [],
    },
    todoList: [
        { id: 1, name: "Learn PHP", completed: false, priority: "Medium" },
        { id: 2, name: "Learn Redux", completed: true, priority: "High" },
        { id: 3, name: "Learn ReactJs", completed: false, priority: "Low" },
    ],
};
const rootReducer = (state = initState, action) => {
    console.log(state, action);
    /*
        {
            type: 'todoList/addTodo'
            payload: { id: 1, name: "Learn PHP", completed: false, priority: "Medium" },
        }
        */
    switch (action.type) {
        case "todoList/addTodo":
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        default:
            return;
    }
};

export default rootReducer;
