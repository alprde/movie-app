import React from 'react'
import Link from "next/link";
import {useRouter} from "next/router";

const Navigation = () => {
  const router = useRouter()
  const linkClass = 'hover:text-gray-700 dark:hover:text-white'
  const activeLinkClass = 'text-gray-700 dark:text-white font-semibold'

  const isActive = (path) => {
    if(router.pathname.startsWith(path)){
      return activeLinkClass;
    }else{
      return linkClass
    }
  }

  return (
    <section>
      <nav className="flex space-x-6 text-gray-400 font-medium">
        <Link href="/tv-series" className={isActive('/tv-series')}>
          TV Series
        </Link>
        <Link href="/movies" className={isActive('/movies')}>
          Movies
        </Link>
      </nav>
    </section>
  )
}

export default Navigation
