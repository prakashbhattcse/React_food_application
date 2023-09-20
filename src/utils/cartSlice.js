import { createSlice } from "@reduxjs/toolkit";

// Create a slice with name "cart" and initial state
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // Initial state with an empty 'items' array
    },

    // Reducers (Actions)
    reducers: {
        // Action to add an item to the 'items' array
        addItem: (state, action) => {
            state.items.push(action.payload); // Modify the state by adding an item
        },
        // Action to remove an item from the end of the 'items' array
        removeItem: (state, action) => {
            state.items.pop(); // Modify the state by removing an item
        },
        // Action to clear the 'items' array
        clearCart: (state, action) => {
            state.items.length = 0; // Modify the state by clearing the cart
        },
    },
});

// Export actions and the reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



// addItem is an action.It is defined as a function inside the reducers object, and it is responsible for
// adding an item to the state.items array.It takes the current state(state) and an action(action) as
// parameters and modifies the state based on the action's payload (the item to be added).

//   (state, action) => { state.items.push(action.payload); } is a reducer function. 
//   This function takes the current state(state) and an action(action) as parameters and defines how the
//   state should be modified in response to the action.In this case, it adds an item to the state.
//   items array.This reducer function is specific to the addItem action.Similarly, there are other 
//   reducer functions defined for the removeItem and clearCart actions within the same reducers object.