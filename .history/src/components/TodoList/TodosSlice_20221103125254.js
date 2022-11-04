import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todoList",
    initialState: { status: "idle", todos: [] },
    reducers: {
        //name/addTodo
        // export const {addTodo, toggleTodoStatus} = actions.reducer
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(
                (todo) => todo.id === action.payload
            );
            if (currentTodo) currentTodo.completed = !currentTodo.completed;
        },
    },
    extraReducers: (builder) => {
        builder
            // pending before the callback is called
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = "loading";
            })
            // in successful payload
            .addCase(fetchTodos.fulfilled, (state, action) => {
                console.log({ action });
                state.todos = action.payload;
                state.status = "idle";
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                let currentTodo = state.todos.find(
                    (todo) => todo.id === action.payload
                );
                currentTodo = action.payload;
            });
        // when todoSlice error
        // .addCase(fetchTodos.rejected, (state, error) => {
        //     state.status = "error";
        //     state.error = error;
        //     console.log("Error: " + state.error);
        // });
    },
});

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
    // try {
    const res = await fetch("/api/todos");
    const data = await res.json();
    return data.todos;
    // } catch (error) {
    //want result return array then argument add [] before error
    // return rejectWithValue([], error);
});
export const addNewTodo = createAsyncThunk(
    "todos/addNewTodo",
    async (newTodo) => {
        const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(newTodo),
        });
        const data = await res.json();
        console.log({ data });
        return data.todos;
    }
);

export const updateTodo = createAsyncThunk(
    "todos/updateTodo",
    async (updatedTodo) => {
        const res = await fetch("/api/updateTodo", {
            method: "POST",
            body: JSON.stringify(updatedTodo),
        });

        const data = await res.json();
        console.log("[updateTodo]", { data });
        return data.todos;
    }
);

/*
 => todos/fetchTodos/pending
 => todos/fetchTodos/fullfilled
 => todos/fetchTodos/rejected
*/

export default todosSlice;

// action => object and action creator () => {return action}
// thunk action(function) and thunk action creators () => {return thunk action}
// use Thunk-Middleware change before when dispatch up reducer
export function addTodos(todo) {
    return function addTodoThunk(dispatch, getState) {
        console.log("[addTodosThunk]", getState());
        console.log({ todo });
        //custom
        todo.name = "Tung Up";
        dispatch(todosSlice.actions.addTodo(todo));

        console.log("[addTodosThunk after]", getState());
    };
    // thunk function - thunk action
}
