import { createSlice, current } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  movies: {},
  searchStatus: false,
  searchText: ''
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
      // state.movies = [action.payload, ...movies]
    },
    loadMoreMovie: (state, action) => {
      const newMovies = [...state.movies.results, ...action.payload.results]

      // action.payload.page = newPage
      action.payload.results = newMovies

      state.movies = action.payload
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload

      if (state.searchText === '') {
        state.searchStatus = false
      } else {
        state.searchStatus = true
      }
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return (state = {
        ...state,
        ...action.payload.movies
      })
    }
  }
})

export const { setMovies, loadMoreMovie, setSearchText } = movies.actions
export default movies.reducer
