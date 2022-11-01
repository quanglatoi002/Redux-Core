const initState = {
    search: "",
    status: "All",
    priorities: [],
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
        case "filters/prioritiesFilterChange":
            return {
                ...state,
                priorities: action.payload,
            };

        default:
            return state;
    }
};

export default filtersReducer;