# Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



 Two types of Export/Import


- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()



#  2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing




 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector


# Types of testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom
 



 # Cart Slice

- This file defines the Redux slice for the cart. A slice includes the reducer and actions for a specific feature of the application—in this case, the cart.

- *initialState*: The initial state of cart is loaded from localStorage.If there are no items in localStorage,it defaults to an empty array.

- *reducers*: This object defines the reducer functions for the cart. Each function takes the current state and an action, and returns the new state.

*addItem*: Adds an item to the cart and saves the new cart to localStorage.

*removeItem*: Removes an item from the cart and saves the new cart to localStorage.

*clearCart* : Clears all items from the cart and removes the cart from localStorage. 

# When an item is added to the cart, the addItem action is dispatched. In the reducer for this action, after the item is added to the state, the updated state is saved to localStorage.

- Similarly, when an item is removed or the cart is cleared, the updated state (after removal of items or clearing) is saved to localStorage. 

- On initial load of the application, the cart items are loaded from localStorage into the initial state of the Redux store.