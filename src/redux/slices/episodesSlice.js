import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    isLoading: null,
    episodeTitle: null
}
const all = createAsyncThunk('episodesSlice/all',
    async (page, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })
const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setEpisodeTitle: (state, action) => {
            state.episodeTitle = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(all.fulfilled, (state, action) => {
            state.episodes = action.payload.results
                .map(episode => (
                    {
                        ...episode,
                        characters: episode.characters.map(character => character.split('/').slice(-1)[0]).join(',')
                    })
                );
            state.prevPage = action.payload.info?.prev;
            state.nextPage = action.payload.info?.next
        })
})
const {reducer: episodeReducer, actions: {setEpisodeTitle}} = episodesSlice;

const episodeActions = {
    all,
    setEpisodeTitle
}
export {
    episodeReducer, episodeActions
}