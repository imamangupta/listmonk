import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCampaigns = createAsyncThunk('campaigns', async ()=>{
    const response = await fetch('http://localhost:8080/api/campaigns?page=1&query=&order_by=created_at&order=desc')
    const campaigns = response.json();
    return campaigns;
})
export const campaignSlice = createSlice({
    name:'campaigns',
    initialState:{
        campaigns: [],
        loading: false,
        error: null
    },
    extraReducers:{
        [getCampaigns.pending] : (state)=>{
            state.loading = true;
        },
        [getCampaigns.fulfilled] : (state,action)=>{
            state.loading = false;
            state.campaigns = action.payload;
        },
        [getCampaigns.rejected] : (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        },
    }
})
export default campaignSlice.reducer;