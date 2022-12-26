import Layout from '../components/Layout'
import { getMovies } from '../functions/getMovies'
import MovieCard from '../components/MovieCard'
import slugify from 'slugify'
import Link from 'next/link'
import { useState } from 'react'

export default function Home(props) {
  const [movies, setMovies] = useState(props.movies)
  const firstMovie = movies.results[0]
  const [loadMoreStatus, setLoadMoreStatus] = useState(false)

  const loadMore = async () => {
    const newPage = movies.page + 1

    const response = await getMovies(newPage)

    const newMovies = [...movies.results, ...response.results]

    response.page = newPage
    response.results = newMovies

    setMovies(response)

    setLoadMoreStatus(false)
  }

  return (
    <Layout title={'Movies'} description={'Movie List'}>
      <section>
        <div
          className="flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white"
          style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w1920_and_h600_face${firstMovie.poster_path}')`
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
              href={`/movies/${slugify(firstMovie.title + ' ' + firstMovie.id, {
                strict: true,
                lower: true
              })}`}
              className="uppercase text-3xl font-semibold drop-shadow-lg "
            >
              {firstMovie.title}
            </Link>
            <div className="text-xs text-gray-200 mt-2">
              <a href="#" className="">
                Action
              </a>
              ,
              <a href="#" className="">
                Adventure
              </a>
              ,
              <a href="#" className="">
                Sci-Fi
              </a>
            </div>
            <div className="mt-4 flex space-x-3 items-center">
              <a
                href="#"
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block"
              >
                Watch
              </a>
              <a
                href="#"
                className="p-2.5 bg-gray-800/80 rounded-lg hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-9">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700 text-base dark:text-white">
            Movies
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
          {movies.results.slice(1, -1).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
      <section>
        {loadMoreStatus === false && (
          <button
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-center font-medium block text-white w-full my-5"
            onClick={() => {setLoadMoreStatus(true); loadMore()}}
          >
            Load more
          </button>
        )}
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const movies = await getMovies()

  return {
    props: {
      movies
    }
  }
}
