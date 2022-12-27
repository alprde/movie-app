import React from 'react'
import fetch from 'isomorphic-unfetch'

const apiKey = process.env.NEXT_PUBLIC_TMBD_API_KEY
const baseURL = process.env.NEXT_PUBLIC_TMDB_BASE_URL

export const getMovies = (page = 1, type = 'movie') => {
    return fetch(`${baseURL}/discover/${type}?api_key=${apiKey}&page=${page}`)
      .then((r) => r.json())
      .then((data) => {
          return data
      })
}

export const getPopularMovies = async (page = 1, type = 'movie') => {
    return fetch(`${baseURL}/${type}/popular?api_key=${apiKey}&page=${page}`)
      .then((r) => r.json())
      .then((data) => {
          return data
      })
}

export const getMovie = async (id, type = 'movie') => {
    return fetch(`${baseURL}/${type}/${id}?api_key=${apiKey}`)
      .then((r) => r.json())
      .then((data) => {
          return data
      })
}

export const getMovieCredits = async (id, type = 'movie') => {
    return fetch(`${baseURL}/${type}/${id}/credits?api_key=${apiKey}`)
      .then((r) => r.json())
      .then((data) => {
          return data
      })
}

export const getSimilarMovies = async (id, type = 'movie') => {
    return fetch(`${baseURL}/${type}/${id}/similar?api_key=${apiKey}`)
      .then((r) => r.json())
      .then((data) => {
          return data
      })
}
