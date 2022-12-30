import {createSlice, current} from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
  movies: {}
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      console.log("action")
      console.log(action)
      state.movies = action.payload
      console.log("state")
      console.log(current(state))
      // state.movies = [action.payload, ...movies]
    },
    loadMoreMovie: (state, action) => {
      const newMovies = [...state.movies.results, ...action.payload.results]

      // action.payload.page = newPage
      action.payload.results = newMovies

      state.movies = action.payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return state = {
        ...state,
        ...action.payload.movies
      }
    }
  }
})

export const { setMovies, loadMoreMovie } = movies.actions
export default movies.reducer
