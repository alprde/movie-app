import { store } from './stores'
import {loadMoreMovie, setMovies, setSearchStatus, setSearchText} from './stores/movies'

export const setMoviesHandle = (movies) => {
  store.dispatch(setMovies(movies))
}

export const loadMoreMovieHandle = (movies) => {
  store.dispatch(loadMoreMovie(movies))
}

export const setSearchTextHandle = (text) => {
  store.dispatch(setSearchText(text))
}
