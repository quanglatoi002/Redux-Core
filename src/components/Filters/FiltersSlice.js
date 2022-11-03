import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All",
        priorities: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        prioritiesFilterChange: (state, action) => {
            state.priorities = action.payload;
        },
    },
});
/*
    vd: searchFilterChange => action creator
    => (payload) => {
        return {
            type:'filters/searchFilterChange
            payload: payload

        } => create action
    }

    ====== structure createSlice =====
    => {
        filtersSlice return two slice
        1. reducer,
        2. actions => use in side UI
    }
    action => object

    {
        type: 'avc
        payload: value
    }
    action creator function : () => {
        return {
            type: 'abc'
            payload: value
        }
    }
*/
