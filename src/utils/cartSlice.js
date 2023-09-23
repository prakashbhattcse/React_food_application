// import { createSlice } from "@reduxjs/toolkit";

// // Create a slice with name "cart" and initial state
// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         items: [], // Initial state with an empty 'items' array
//     },

//     // Reducers (Actions)
//     reducers: {
//         // Action to add an item to the 'items' array
//         addItem: (state, action) => {
//             state.items.push(action.payload); // Modify the state by adding an item
//         },
//         // Action to remove an item from the end of the 'items' array
//         removeItem: (state, action) => {
//             state.items.pop(); // Modify the state by removing an item
//         },
//         // Action to clear the 'items' array
//         clearCart: (state, action) => {
//             state.items.length = 0; // Modify the state by clearing the cart
//         },
//     },
// });

// // Export actions and the reducer
// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;



//# addItem is an action.It is defined as a function inside the reducers object, and it is responsible for
// adding an item to the state.items array.It takes the current state(state) and an action(action) as
// parameters and modifies the state based on the action's payload (the item to be added).

//  # (state, action) => { state.items.push(action.payload); } is a reducer function. 
//   This function takes the current state(state) and an action(action) as parameters and defines how the
//   state should be modified in response to the action.In this case, it adds an item to the state.
//   items array.This reducer function is specific to the addItem action.Similarly, there are other 
//   reducer functions defined for the removeItem and clearCart actions within the same reducers object.


import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: JSON.parse(localStorage.getItem('cart')) || [], // Load cart from localStorage  
        // #  this line is converting the current state of the cart items into a JSON string and storing it in local storage under the key 'cart'. This allows the state of the cart items to persist across browser sessions.
    },

    // Reducers (Actions)
    reducers: {
        addItem: (state, action) => {

            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            state.items.push(action.payload);   // Modify the state by adding an item
            localStorage.setItem('cart', JSON.stringify(state.items)); // Save cart to localStorage
        },

        removeItem: (state, action) => {
            state.items.pop(); // Modify the state by removing an item
            localStorage.setItem('cart', JSON.stringify(state.items)); // Save cart to localStorage
        },
        clearCart: (state, action) => {
            state.items.length = 0; // Modify the state by clearing the cart
            localStorage.removeItem('cart'); // Clear cart from localStorage
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;










// *cartSlice.js * This file defines the Redux slice for the cart. A slice includes the reducer and actions for a specific feature of the application—in this case, the cart.

// #initialState : The initial state of the cart is loaded from localStorage. If there are no items in localStorage, it defaults to an empty array.

// # reducers: This object defines the reducer functions for the cart. Each function takes the current state and an action, and returns the new state.

// #addItem: Adds an item to the cart and saves the new cart to localStorage.

// # removeItem: Removes an item from the cart and saves the new cart to localStorage.

// # clearCart: Clears all items from the cart and removes the cart from localStorage.





