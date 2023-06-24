"use client"
import React from 'react'
import '@/styles/Navbar.css';
import { Logo } from './Clients';
import {NavigationBar} from './Clients'
import {WriteBlog} from './Clients'

const Navbar = () => {
  return (
    <>
    <div className='centerIt'>
    <div className='header'>
    
      <div className='logo_name'>
       <Logo/>
      </div>

      <div className='navbar'>
        <NavigationBar/>
      </div>


      <div className='searchBtn_writeBlogs'>
        
      <WriteBlog/>
      </div>
    </div>
    
    </div>
    {/* <div className="searchHereContainer">
        <div className="input">
          <input type="text" placeholder="Start typing to Search" />
        </div>
        <div className="searchIcon_SmallPara">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg> 
          <p className="searchPara">Search for tags,people,articles and many more</p>
        </div>
      </div> */}
    </>
  )
}

export default Navbar
