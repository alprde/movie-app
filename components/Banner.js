import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import { getMovie } from '../functions/getMovies'
import { useRouter } from 'next/router'
import {useSelector} from "react-redux";

const Banner = ({movieID, type, pagePrefix }) => {
  const dynamicRoute = useRouter().asPath
  const {movies} = useSelector(state => state.movies)
  movieID = movieID ? movieID : movies.results[0] ? movies.results[0].id : 0
  const [movie, setMovie] = useState({})
  const [movieName, setMovieName] = useState("")
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovie(movieID, type)
      setMovie(data)
      setMovieName('title' in data ? data.title : data.name)
      setGenres(data.genres)
    }

    fetchMovie()
  }, [dynamicRoute, movies])

  // (!('results' in movies) || movies.results.length <= 0) ||
  if(!('id' in movie)){
    return <></>
  }

  return (
    <div
      className="flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white"
      style={{
        backgroundImage: `url('${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w1920_and_h600_face/${movie.poster_path}')`
      }}
    >
      <div className="flex -space-x-1 items-center ">
        {/*<img*/}
        {/*  className="rounded-full w-7 h-7 shadow-lg border border-white"*/}
        {/*  src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsrj8csk"*/}
        {/*  alt=""*/}
        {/*  srcSet=""*/}
        {/*/>*/}
        {/*<img*/}
        {/*  className="rounded-full w-7 h-7 shadow-lg border border-white"*/}
        {/*  src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsrj8cck"*/}
        {/*  alt=""*/}
        {/*  srcSet=""*/}
        {/*/>*/}
        {/*<img*/}
        {/*  className="rounded-full w-7 h-7 shadow-lg border border-white"*/}
        {/*  src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsfj8cck"*/}
        {/*  alt=""*/}
        {/*  srcSet=""*/}
        {/*/>*/}
        {/*<span className="pl-4 text-xs drop-shadow-lg">*/}
        {/*  +8 friends are watching*/}
        {/*</span>*/}
      </div>

      <div className="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2">
        <Link
          href={`/${pagePrefix}/${slugify(
            movieName + ' ' + movie.id,
            {
              strict: true,
              lower: true
            }
          )}`}
          className="uppercase text-3xl font-semibold drop-shadow-lg "
        >
          {movieName}
        </Link>
        <div className="text-xs text-gray-200 mt-2">
          {
            // console.log(movie.genres[0])
            genres.map((genre, i, row) => (
              <a href="#" className="" key={i}>
                {genre.name}
                {i + 1 !== row.length ? ', ' : null}
              </a>
            ))
          }
        </div>
        <div className="mt-4 flex space-x-3 items-center">
          {/*<a*/}
          {/*  href="#"*/}
          {/*  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block"*/}
          {/*>*/}
          {/*  Watch*/}
          {/*</a>*/}
          {/*<a*/}
          {/*  href="#"*/}
          {/*  className="p-2.5 bg-gray-800/80 rounded-lg hover:bg-red-600"*/}
          {/*>*/}
          {/*  <svg*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*    className="h-4 w-4"*/}
          {/*    viewBox="0 0 20 20"*/}
          {/*    fill="currentColor"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      fillRule="evenodd"*/}
          {/*      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"*/}
          {/*      clipRule="evenodd"*/}
          {/*    />*/}
          {/*  </svg>*/}
          {/*</a>*/}
        </div>
      </div>
    </div>
  )
}

export default Banner
