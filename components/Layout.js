import Head from 'next/head'
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Rightbar from './Rightbar'
import Navigation from './Navigation'

const Layout = ({ title, description, children }) => {
  title = `Movie App - ${title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="font-montserrat text-sm bg-white dark:bg-zinc-900 ">
        <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700">
          <Sidebar />

          <main className="flex-1 py-10  px-5 sm:px-10">
            <Header />

            <Navigation />

            {children}
          </main>

          <Rightbar />
        </div>
      </div>
    </>
  )
}

export default Layout
