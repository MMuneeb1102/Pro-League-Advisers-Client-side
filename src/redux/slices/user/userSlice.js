import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../auth/authThunk';

const initialState = {
    isLoading: true,
    isError: false,
    data: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetData: ((state)=>{
            state.data = null
        })
    },
    extraReducers: (builder) =>{
        builder.addCase(getUser.pending, (state) =>{
            state.isLoading = true
        })

        builder.addCase(getUser.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isError = false
            state.data = action.payload
        })
        builder.addCase(getUser.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.data = action.payload;
        })
    }
})
export const { resetData } = userSlice.actions;
export default userSlice.reducer;