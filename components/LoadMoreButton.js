import React, { useState } from 'react'
import { getMovies } from '../functions/getMovies'
import { loadMoreMovieHandle } from '../utils'
import { useSelector } from 'react-redux'

const LoadMoreButton = () => {
  const { movies } = useSelector((state) => state.movies)
  const [loadMoreStatus, setLoadMoreStatus] = useState(false)

  const loadMore = async () => {
    setLoadMoreStatus(true)

    const newPage = movies.page + 1

    const response = await getMovies(newPage)

    loadMoreMovieHandle(response)

    setLoadMoreStatus(false)
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
