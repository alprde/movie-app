import React from 'react'
import { getMovie } from '../../functions/getMovies'
import Layout from '../../components/Layout'
import Cast from '../../components/Cast'
import SimilarMovies from '../../components/SimilarMovies'
import Banner from '../../components/Banner'
import Overview from '../../components/Overview'

const MovieDetail = ({ movie, movieName }) => {
  return (
    <Layout title={movieName} description={movie.overview}>
      <section>
        <Banner movieID={movie.id} type={'tv'} pagePrefix={'tv-series'} />
      </section>

      <Cast id={movie.id} type={'tv'} />

      <Overview overview={movie.overview} />

      <SimilarMovies id={movie.id} type={'tv'} pagePrefix={'tv-series'} />
    </Layout>
  )
}

// export const getStaticPaths = async () => {
//   const movies = await getMovies()
//   const paths = movies.results.map((movie) => {
//     return {
//       params: {
//         slug: `${slugify(movie.title + ' ' + movie.id, {
//           strict: true,
//           lower: true
//         })}`
//       }
//     }
//   })
//
//   return {
//     paths,
//     fallback: false
//   }
// }
//
// export const getStaticProps = async ({ params }) => {
//   const id = params.slug.split('-').slice(-1)[0]
//   const movie = await getMovie(id)
//
//   return {
//     props: {
//       movie,
//     }
//   }
// }

export const getServerSideProps = async ({ params }) => {
  const id = params.slug.split('-').slice(-1)[0]
  const movie = await getMovie(id, 'tv')
  const movieName = 'title' in movie ? movie.title : movie.name

  return {
    props: {
      movie,
      movieName
    }
  }
}

export default MovieDetail
