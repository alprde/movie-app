import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { getMovies } from '../functions/getMovies'
import Banner from '../components/Banner'
import MovieList from '../components/MovieList'
import { loadMoreMovieHandle, setMoviesHandle } from '../utils'
import { storeWrapper } from '../stores'
import LoadMoreButton from '../components/LoadMoreButton'

export default function Home(props) {
  return (
    <Layout title={'Movies'} description={'Movie List'}>
      <section>
        <Banner />
      </section>

      <section className="mt-9">
        <MovieList title="Movies" />
      </section>

      <section>
        <LoadMoreButton />
      </section>
    </Layout>
  )
}

// export const getStaticProps = async (context) => {
//   const movies = await getMovies()
//   console.log(context)
//
//   // await setMoviesHandle(movies)
//
//   return {
//     props: {
//       movies
//     }
//   }
// }

export const getStaticProps = storeWrapper.getStaticProps(
  (store) => async () => {
    const movies = await getMovies()

    await setMoviesHandle(movies)

    return {
      props: {
        movies
      }
    }
  }
)
