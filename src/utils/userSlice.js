import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: "user",
    initialState: null,

    reducers: {

        addUser: (user, action) => {
            return action.payload
        },

        removeUser: (user, action) => {
            return null;
        }
    }
})


export const {addUser,removeUser} = userSlice.actions;

export default userSlice.reducer;