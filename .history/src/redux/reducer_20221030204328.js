const initState = {
    filters: {
        search: "",
        status: "All",
        priority: [],
    },
    todoList: [
        { id: 1, name: "Learn PHP", completed: false, priority: "Medium" },
        { id: 2, name: "Learn Redux", completed: false, priority: "Medium" },
        { id: 3, name: "Learn ReactJs", completed: false, priority: "Medium" },
    ],
};
const rootReducer = (state = initState, action) => {
    return <div>reducer</div>;
};

export default rootReducer;
