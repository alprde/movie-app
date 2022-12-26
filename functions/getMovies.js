import React from 'react'
import fetch from 'isomorphic-unfetch'

const apiKey = process.env.NEXT_PUBLIC_TMBD_API_KEY
const baseURL = process.env.NEXT_PUBLIC_TMDB_BASE_URL

export const getMovies = (page = 1) => {
    return fetch(`${baseURL}/discover/movie?api_key=${apiKey}&page=${page}`)
      .then((r) => r.json())
      .then((data) => {
          return data
      })
}

export const getPopularMovies = async () => {
    return fetch(`${baseURL}/movie/popular?api_key=${apiKey}`)
      .then((r) => r.json())
      .then((data) => {
          return data
      })
}

export const getMovie = async (id) => {
    return fetch(`${baseURL}/movie/${id}?api_key=${apiKey}`)
      .then((r) => r.json())
      .then((data) => {
          return data
      })
}

export const getMovieCredits = async (id) => {
    return fetch(`${baseURL}/movie/${id}/credits?api_key=${apiKey}`)
      .then((r) => r.json())
      .then((data) => {
          return data
      })
}

export const getSimilarMovies = async (id) => {
    return fetch(`${baseURL}/movie/${id}/similar?api_key=${apiKey}`)
      .then((r) => r.json())
      .then((data) => {
          return data
      })
}
