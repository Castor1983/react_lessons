import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    isLoading: null,
    page: 1
}
const all = createAsyncThunk('episodesSlice/all',
    async (_, thunkAPI)=>{
    try {
        const{data} = await episodesService.getAll();
        return console.log(data)
    }catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
    })
const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers:{},
    extraReducers:{
[all.fulfilled]: (state, action)=> {
    state.episodes = action.payload
}
    }
});
const {reducer: episodeReducer, actions} = episodesSlice;

const episodeActions = {
all
}
export {
    episodeReducer, episodeActions
}