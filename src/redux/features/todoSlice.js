import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.value.push(action.payload);
        },
        removeItem: (state, action) => {
            state.value = state.value.filter(todo => todo.id !== action.payload.id);
        },
        completeItem: (state, action) => {
            state.value = state.value.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        },
        editItem: (state, action) => {
            state.value = state.value.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, text: action.payload.editedText };
                }
                return todo;
            });
        }
    }
});

export const { addItem, removeItem, completeItem, editItem } = todoSlice.actions

export default todoSlice.reducer;
