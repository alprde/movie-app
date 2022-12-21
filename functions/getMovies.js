import React from 'react'
import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_TMBD_API_KEY
const baseURL = process.env.NEXT_PUBLIC_TMDB_BASE_URL

const axiosOptions = {
  headers: {
    'Accept-Encoding': '*'
  }
}

export const getMovies = async () => {
  return (
    await axios.get(`${baseURL}/discover/movie?api_key=${apiKey}`, {
      headers: {
        'Accept-Encoding': '*'
      }
    })
  ).data
}

export const getPopularMovies = async () => {
  return (
    await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`, {
      headers: {
        'Accept-Encoding': '*'
      }
    })
  ).data
}

export const getMovie = async (id) => {
  return (
    await axios.get(`${baseURL}/movie/${id}?api_key=${apiKey}`, {
      headers: {
        'Accept-Encoding': '*'
      }
    })
  ).data
}

export const getMovieCredits = async (id) => {
  return (
    await axios.get(`${baseURL}/movie/${id}/credits?api_key=${apiKey}`, {
      headers: {
        'Accept-Encoding': '*'
      }
    })
  ).data
}

export const getSimilarMovies = async (id) => {
  return (await axios.get(`${baseURL}/movie/${id}/similar?api_key=${apiKey}`))
    .data
}
