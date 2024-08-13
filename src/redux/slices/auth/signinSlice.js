import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./authThunk";

const initialState = {
    email: '',
    password: '',
    isLoading: false,
    isError: '',
    response: ''
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
    },
    extraReducers: (builder) =>{
        builder.addCase(signIn.pending, (state)=>{
            state.isLoading = true;
        })

        builder.addCase(signIn.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isError = ''
            state.response = action.payload
        })

        builder.addCase(signIn.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
            state.response = ''
        })
    }
})

export const { updateEmail, updatePassword } = signinSlice.actions;
export default signinSlice.reducer;