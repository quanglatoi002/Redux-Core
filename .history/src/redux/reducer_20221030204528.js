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
    switch (
        action.type
        /*
        {
            type: 'todoList/addTodo'
            payload: { id: 1, name: "Learn PHP", completed: false, priority: "Medium" },
        }
        */
    ) {
    }
};

export default rootReducer;
