import Layout from '../../components/Layout'
import { useState } from 'react'
import { getMovies } from '../../functions/getMovies'
import Banner from '../../components/Banner'
import MovieList from '../../components/MovieList'
import {storeWrapper} from "../../stores";
import {setMoviesHandle} from "../../utils";
import LoadMoreButton from "../../components/LoadMoreButton";

export default function Movies(props) {
  return (
    <Layout title={'Movies'} description={'Movie List'}>
      <section>
        <Banner type="tv" pagePrefix={'tv-series'} />
      </section>

      <section className="mt-9">
        <MovieList title="Movies" pagePrefix={'tv-series'} />
      </section>

      <section>
        <LoadMoreButton/>
      </section>
    </Layout>
  )
}

export const getStaticProps = storeWrapper.getStaticProps(
    (store) => async () => {
        const movies = await getMovies(1, 'tv')

        await setMoviesHandle(movies)

        return {
            props: {
                movies
            }
        }
    }
)
