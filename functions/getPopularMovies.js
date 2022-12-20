import React from 'react'
import axios from 'axios'

export const getPopularMovies = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMBD_API_KEY}`
  )

  return response.data
}
