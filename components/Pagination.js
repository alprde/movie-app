import React, { useState } from 'react'
import { getMovies } from '../functions/getMovies'
import ReactPaginate from 'react-paginate'

const Pagination = ({pageCount, handlePageClick}) => {
  let limit = 12

  const containerClass = 'flex justify-center h-auto align-center my-5'
  const activeClass =
    'border-highlight text-highlight border-t-2inline-flex items-center text-sm font-medium bg-red-500 !text-white'
  const inActiveClass =
    'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 py-2 px-4 inline-flex items-center text-sm font-medium'

  // const handlePageClick = async (data) => {
  //     let currentPage = data.selected + 1;
  //
  //     const response = await getMovies(currentPage);
  //
  //     setMovies(response)
  // };

  return (
    <>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={containerClass}
        pageLinkClassName={inActiveClass}
        previousLinkClassName={inActiveClass}
        nextClassName={inActiveClass}
        breakClassName={inActiveClass}
        activeLinkClassName={activeClass}
      />
    </>
  )
}

export default Pagination
