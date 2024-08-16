import { createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const fetchTournaments = createAsyncThunk('tournament/fetch', async ()=>{
    try {
        const response = await fetch(`${apiUrl}/api/tournament/fetch`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = response.json();
        return data;
    } catch (error) {
        return error
    }
})

export const fetchMyTournament = createAsyncThunk('tournament/fetch-mytournament', async ()=>{
    try {
        const response = await fetch(`${apiUrl}/api/tournament/mytournament`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': cookies.get('auth-token')
            }
        })
        const data = response.json();
        return data;
    } catch (error) {
        return error
    }
})

export const fetchSpecificTournament = createAsyncThunk('tournament/fetch-specifictournament', async (id)=>{
    try {
        const response = await fetch(`${apiUrl}/api/tournament/get-tournament-details/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': cookies.get('auth-token')
            }
        })
        const data = response.json();
        return data;
    } catch (error) {
        return error
    }
})

export const joinTournament = createAsyncThunk('tournament/join', async (data, { rejectWithValue })=>{
    try {
        console.log(data)
        const response = await fetch(`${apiUrl}/api/tournament/join-tournament/${data.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'auth-token': cookies.get('auth-token')
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            const errorData = await response.json();
            return rejectWithValue(errorData || "Failed to join")
        }
        const resData = await response.json();
        return resData
    } catch (error) {
        return rejectWithValue('Network error. Please try again later.');
    }
})