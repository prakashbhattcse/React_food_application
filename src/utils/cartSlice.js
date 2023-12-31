//# addItem is an action.It is defined as a function inside the reducers object, and it is responsible for
// adding an item to the state.items array.It takes the current state(state) and an action(action) as
// parameters and modifies the state based on the action's payload (the item to be added).

//  # (state, action) => { state.items.push(action.payload); } is a reducer function. 
//   This function takes the current state(state) and an action(action) as parameters and defines how the
//   state should be modified in response to the action.In this case, it adds an item to the state.
//   items array.This reducer function is specific to the addItem action.Similarly, there are other 
//   reducer functions defined for the removeItem and clearCart actions within the same reducers object.


// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         items: JSON.parse(localStorage.getItem('cart')) || [], // Load cart from localStorage  
//         // #  this line is converting the current state of the cart items into a JSON string and storing it in local storage under the key 'cart'. This allows the state of the cart items to persist across browser sessions.
//     },

//     // Reducers (Actions)
//     reducers: {
//         addItem: (state, action) => {

//             const existingItem = state.items.find(item => item.id === action.payload.id);
            
//             state.items.push(action.payload);   // Modify the state by adding an item
//             localStorage.setItem('cart', JSON.stringify(state.items)); // Save cart to localStorage
//         },


//         removeItem: (state, action) => {
//             const index = state.items.findIndex(item => item.card.info.id === action.payload);
//             if (index !== -1) {
//                 state.items.splice(index, 1);
//                 // state.items.splice(action.payload, 1);
//                 localStorage.setItem('cart', JSON.stringify(state.items)); // Save cart to localStorage
//             }
//         },
        
//         clearCart: (state, action) => {
//             state.items.length = 0; // Modify the state by clearing the cart
//             localStorage.removeItem('cart'); // Clear cart from localStorage
//         },
//     },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;










// *cartSlice.js * This file defines the Redux slice for the cart. A slice includes the reducer and actions for a specific feature of the application—in this case, the cart.

// #initialState : The initial state of the cart is loaded from localStorage. If there are no items in localStorage, it defaults to an empty array.

// # reducers: This object defines the reducer functions for the cart. Each function takes the current state and an action, and returns the new state.

// #addItem: Adds an item to the cart and saves the new cart to localStorage.

// # removeItem: Removes an item from the cart and saves the new cart to localStorage.

// # clearCart: Clears all items from the cart and removes the cart from localStorage.



import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: JSON.parse(localStorage.getItem('cart')) || [], 
    },

    reducers: {
        addItem: (state, action) => {
            const existingIndex = state.items.findIndex(item => item.card.info.id === action.payload.card.info.id);

            if (existingIndex === -1) {
                state.items.push({ ...action.payload, quantity: 1 });
            } else {
                // If the item already exists in the cart, increase its quantity
                state.items[existingIndex].quantity += 1;
            }

            localStorage.setItem('cart', JSON.stringify(state.items)); 
        },

        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.card.info.id === action.payload);

            if (index !== -1) {
                // If the item's quantity is greater than 1, decrease its quantity
                if (state.items[index].quantity > 1) {
                    state.items[index].quantity -= 1;
                } else {
                    state.items.splice(index, 1);
                }

                localStorage.setItem('cart', JSON.stringify(state.items));
            }
        },
        
        clearCart: (state, action) => {
            state.items.length = 0; 
            localStorage.removeItem('cart'); 
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
