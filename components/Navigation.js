import React from 'react'
import Link from "next/link";

const Navigation = () => {
  return (
    <section>
      <nav className="flex space-x-6 text-gray-400 font-medium">
        <a href="/tv-series" className="hover:text-gray-700 dark:hover:text-white">
          TV Series
        </a>
        <Link href="/movies" className="text-gray-700 dark:text-white font-semibold">
          Movies
        </Link>
        <a href="/animes" className="hover:text-gray-700 dark:hover:text-white ">
          Animes
        </a>
      </nav>
    </section>
  )
}

export default Navigation
