import Layout from '../components/Layout'
import { useState } from 'react'
import { getMovies } from '../functions/getMovies'
import MovieCard from '../components/MovieCard'
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";

export default function Home(props) {
  const [movies, setMovies] = useState(props.movies)
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
        <Banner movie={movies.results[0]}/>
      </section>

      <section className="mt-9">
        <MovieList title="Movies" movies={movies.results.slice(1, -1)}/>
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
