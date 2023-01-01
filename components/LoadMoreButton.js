import React, { useState } from 'react'
import {getMovies, searchMovies} from '../functions/getMovies'
import { loadMoreMovieHandle } from '../utils'
import { useSelector } from 'react-redux'

const LoadMoreButton = () => {
  const { movies, searchStatus, searchText } = useSelector((state) => state.movies)
  const [loadMoreStatus, setLoadMoreStatus] = useState(false)

  const loadMore = async () => {
    setLoadMoreStatus(true)

    const newPage = movies.page + 1

    const response = !searchStatus ? await getMovies(newPage) : await searchMovies(searchText, newPage)

    loadMoreMovieHandle(response)

    setLoadMoreStatus(false)
  }

  if((!('results' in movies) || movies.results.length <= 0) || movies.total_pages <= movies.page){
    return <></>
  }

  return (
    <>
      {loadMoreStatus === false && (
        <button
          className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-center font-medium block text-white w-full my-5"
          onClick={loadMore}
        >
          Load more
        </button>
      )}
    </>
  )
}

export default LoadMoreButton
