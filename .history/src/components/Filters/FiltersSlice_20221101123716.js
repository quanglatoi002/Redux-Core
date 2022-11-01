const initState = {
    search: "",
    status: "All",
    priority: [],
};
const filtersReducer = (state = initState, action) => {
    //  action => get in a object {type, payload}

    switch (action.type) {
        case "filters/searchFilterChange":
            return {
                ...state,
                search: action.payload,
            };
        case "filters/statusFilterChange":
            return {
                ...state,
                status: action.payload,
            };
        case "filters/priorityFilterChange":
            return {
                ...state,
                status: action.payload,
            };

        default:
            return state;
    }
};

export default filtersReducer;
