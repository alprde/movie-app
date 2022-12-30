import {store, storeWrapper} from './stores'
import {loadMoreMovie, setMovies} from './stores/movies'

export const setMoviesHandle = (movies) => {
  store.dispatch(setMovies(movies))
}

export const loadMoreMovieHandle = (movies) => {
  store.dispatch(loadMoreMovie(movies))
}
