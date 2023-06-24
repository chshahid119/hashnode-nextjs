import React from 'react'
import Link from 'next/link'
import Weeks_days from './Weeks_days'
import '@/styles/Trending.css'

const Trending = () => {
  return (
    <>
      <div className='trend_heading_seeAll'>
       <h3 className='trending'>Trending</h3>
       <Link className='seeAll' href='/'>See All</Link>
      </div>

      <div className='daysNavbar'>
          <Weeks_days/>
      </div>
    </>
  )
}

export default Trending
