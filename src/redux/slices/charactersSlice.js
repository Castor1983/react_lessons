import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characters: []
}
const getByIds = createAsyncThunk('charactersSlice/getByIds',
    async (_, thunkAPI)=>{
        try {
            const{data} = await characterService.getByIds();
            return console.log(data)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })
const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getByIds.fulfilled]: (state, action)=> {
            state.characters = action.payload
        }
    }
});
const {reducer: characterReducer, actions} = charactersSlice;

const characterActions = {
    getByIds
}
export {
    characterReducer, characterActions
}