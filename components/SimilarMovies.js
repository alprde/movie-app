import React, { useEffect, useState } from 'react'
import { getMovieCredits, getSimilarMovies } from '../functions/getMovies'
import { useRouter } from 'next/router'
import slugify from 'slugify'
import Link from 'next/link'
import MovieCard from './MovieCard'

const SimilarMovies = ({ id, type, pagePrefix }) => {
  const [similar, setSimilar] = useState([])
  const dynamicRoute = useRouter().asPath

  useEffect(() => {
    const getSimilar = async (id) => {
      const similarMovies = await getSimilarMovies(id, type)

      setSimilar(similarMovies.results.slice(0, 3))
    }

    getSimilar(id)
  }, [dynamicRoute])

  return (
    <section className="mt-9">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-700 text-base dark:text-white">
          Similar Movies
        </span>
        <div className="flex items-center space-x-2 fill-gray-500">
          <svg
            className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>
          </svg>
          <svg
            className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>
          </svg>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
        {similar.map((movie) => (
          <MovieCard movie={movie} key={movie.id} pagePrefix={pagePrefix} />
        ))}
      </div>
    </section>
  )
}

export default SimilarMovies
