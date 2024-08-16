import { createSlice } from "@reduxjs/toolkit";
import { fetchMyTournament, fetchSpecificTournament, fetchTournaments, joinTournament } from "./tournamentThunk";
import { getDate, getTime } from "../../../js/getDateAndTime";

const initialState = {
    platform: {
        platformName: '',
        platformId: ''
    },
    startDate: '',
    startTime: '',
    allTournaments: [],
    myTournament: null,
    specificTournament: null,
    isLoading: false,
    submitLoading: false,
    isError: false,
    response: null
}

const tournamentSlice = createSlice({
    name: 'tournament',
    initialState,
    reducers: {
        setMyTournament : (state)=>{
            state.myTournament = null
        },

        setPlatformName : (state, action)=>{
            state.platform.platformName = action.payload
        },

        setPlatformId : (state, action)=>{
            state.platform.platformId = action.payload
        },
    },
    extraReducers: (builder)=>{
        //Fetching all the tournaments cases
        builder.addCase(fetchTournaments.pending, (state)=>{
            state.isLoading = true
        })

        builder.addCase(fetchTournaments.fulfilled, (state, action)=>{
            state.isLoading = false
            state.allTournaments = action.payload
        })

        builder.addCase(fetchTournaments.rejected, (state)=>{
            state.isLoading = false
            state.isError = true
        })

        //Fetch my tournament cases
        builder.addCase(fetchMyTournament.pending, (state)=>{
            state.isLoading = true
        })

        builder.addCase(fetchMyTournament.fulfilled, (state, action)=>{
            state.isLoading = false
            state.myTournament = action.payload
            state.isError = false
        })
        builder.addCase(fetchMyTournament.rejected, (state)=>{
            state.isLoading = false
            state.isError = true
        })

        //Fetch specific tournament cases
        builder.addCase(fetchSpecificTournament.pending, (state)=>{
            state.isLoading = true
        })

        builder.addCase(fetchSpecificTournament.fulfilled, (state, action)=>{
            const dateOnly = getDate(action.payload.startDate)
            const timeOnly = getTime(action.payload.startDate)

            state.isLoading = false
            state.startDate = dateOnly
            state.startTime = timeOnly
            state.specificTournament = action.payload
            state.isError = false
        })

        builder.addCase(fetchSpecificTournament.rejected, (state)=>{
            state.isLoading = false
            state.isError = true
        })

        //Join Tournament cases
        builder.addCase(joinTournament.pending, (state)=>{
            state.submitLoading = true
        })

        builder.addCase(joinTournament.fulfilled, (state, action)=>{
            state.submitLoading = false
            state.response = action.payload
            state.isError = false
        })

        builder.addCase(joinTournament.rejected, (state, action)=>{
            state.submitLoading = false
            state.response = action.payload
            state.isError = true
        })
    }
})

export const {setMyTournament, setPlatformName, setPlatformId} = tournamentSlice.actions;
export default tournamentSlice.reducer;