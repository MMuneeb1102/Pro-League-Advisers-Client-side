import { createSlice } from '@reduxjs/toolkit';
import { signup } from './authThunk';

const initialState = {
    email: '',
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    passwordCheckbox: false,
    isLoading: false,
    isError: false,
    response: null
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        updateEmail: (state, action) =>{
            state.email = action.payload;
        },

        updateFullname: (state, action) =>{
            state.fullname = action.payload;
        },

        updateUsername: (state, action) =>{
            state.username = action.payload;
        },

        updatePassword: (state, action) =>{
            state.password = action.payload;
        },

        updateConfirmPassword: (state, action) =>{
            state.confirmPassword = action.payload;
        },

        updatePasswordCheckBox: (state, action) =>{
            state.passwordCheckbox = action.payload;
        },
    },

    extraReducers: (builder) =>{
        builder.addCase(signup.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isError = false
            state.response = action.payload
        })

        builder.addCase(signup.pending, (state) =>{
            state.isLoading = true
        })

        builder.addCase(signup.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.response = action.payload
        })
    }
});

export const {updateEmail, updatePassword, updateConfirmPassword, updatePasswordCheckBox, updateFullname, updateUsername} = signupSlice.actions;
export default signupSlice.reducer;