import { createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const signup = createAsyncThunk(async (data, { rejectWithValue })=>{
    try {
        const response = await fetch(`${apiUrl}/api/auth/create-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            const errorData = await response.json();
            return rejectWithValue(errorData.message || 'Failed to sign in');
        }

        const responseData = response.json();
        return responseData;

    } catch (error) {
        return rejectWithValue('Network error. Please try again later.');
    }
})

export { signup };