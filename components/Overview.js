import React from 'react'

const Overview = ({ overview }) => {
  return (
    <section>
      <div className="mt-10">
        <span className="font-semibold text-gray-700 text-base dark:text-white">
          Overview
        </span>
      </div>
      <div className="w-full rounded-xl border dark:border-zinc-600 p-5 min-h-200 mt-3">
        {overview}
      </div>
    </section>
  )
}

export default Overview
