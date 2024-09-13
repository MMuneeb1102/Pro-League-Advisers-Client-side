import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const cookies = new Cookies();

const signup = createAsyncThunk("auth/create-user", async (data, { rejectWithValue })=>{
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
            console.log(errorData);
            return rejectWithValue(errorData.message || 'Failed to sign up');
        }

        const responseData = response.json();
        console.log(responseData);
        return responseData;

    } catch (error) {
        return rejectWithValue('Network error. Please try again later.');
    }
})

const signIn = createAsyncThunk('auth/login', async (data, {rejectWithValue}) =>{
    try {
        const response = await fetch(`${apiUrl}/api/auth/login-user`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        
        if(!response.ok){
            const errorData = await response.json();
            console.log(errorData)
            return rejectWithValue(errorData.message || 'Failed to sign in');
        }
    
        const responseData = response.json();
        console.log(responseData);
        return responseData;

    } catch (error) {
        return rejectWithValue('Network error. Please try again later.');
    }
})

const getUser = createAsyncThunk('auth/getuser', async () =>{
    try {
        // console.log('running')
        const response = await fetch(`${apiUrl}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': cookies.get('auth-token')
            }
        })
    
        if(!response.ok){
            const errorData = await response.json();
            console.log(errorData);
            return errorData
        }
    
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    } catch (error) {
        return error
    }
})

export { signup, signIn, getUser };