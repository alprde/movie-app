import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieList = ({ title, pagePrefix }) => {
  const { movies } = useSelector((state) => state.movies)

  if (!('results' in movies) || movies.results.length <= 0) {
    return (
        <>
            <div className="bg-red-600 flex justify-center items-center p-3 rounded-lg">Data not found</div>
        </>
    )
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-700 text-base dark:text-white">
          {title}
        </span>
        {/*<div className="flex items-center space-x-2 fill-gray-500">*/}
        {/*  <svg*/}
        {/*    className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    viewBox="0 0 24 24"*/}
        {/*  >*/}
        {/*    <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>*/}
        {/*  </svg>*/}
        {/*  <svg*/}
        {/*    className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    viewBox="0 0 24 24"*/}
        {/*  >*/}
        {/*    <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>*/}
        {/*  </svg>*/}
        {/*</div>*/}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
        {movies.results.slice(1, -1).map((movie) => {
            if('media_type' in movie){
                if(movie.media_type === 'person'){
                    return false;
                }

                switch (movie.media_type) {
                    case 'movie':
                        pagePrefix = 'movies';
                        break;
                    case 'tv':
                        pagePrefix = 'tv-series';
                        break;
                }
            }

            return <MovieCard movie={movie} key={movie.id} pagePrefix={pagePrefix} />
        })}
      </div>
    </>
  )
}

export default MovieList
