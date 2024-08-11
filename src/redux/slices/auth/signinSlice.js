import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: ''
}

const signinSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        updateEmail: (state, action) =>{
            state.email = action.payload;
        },

        updatePassword: (state, action) =>{
            state.password = action.payload;
        }
    }
})

export const { updateEmail, updatePassword } = signinSlice.actions;
export default signinSlice.reducer;