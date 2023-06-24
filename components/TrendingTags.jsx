"use client"
import Link from 'next/link'
import React, { useEffect,useState } from 'react'
import { CardsofBlogs,NewlyAddedCards,
  TechBlogCards,ShortCardsNotWorthy,LastJoinAndLoginCard} from './Clients2'
import '@/styles/TechBlogsCards.css';
import '@/styles/TrendingTags.css'
import axios from 'axios';

const TrendingTags = () => {
  const [tags,setTags]=useState([]);
  const [newTags,setNewTags]=useState([])
  const [trendigTechBlogs,setTrendingTechBlogs]=useState([])
  // console.log(tags)
  // console.log(newTags)
  const FetchData=async()=>{
     const response=await fetch('http://localhost:3000/api')
     const data=await response.json()
      
        setTags(await data.trendingTags);
        setNewTags(await data.newlyAddedTags)
        setTrendingTechBlogs(await data.trendingTechBlogs)
       
       

 }
  
  useEffect(()=>
  {
    FetchData();
  },[])

  return (
    <>
      <nav className='navTrendingNavbar'>
      <ul className="ultrendingNavbar">
        <li className="liTrendingNavbar">
          <Link href="/explore"  className='linkNavbar '  >
            Trending
          </Link>
        </li>

        <li className="liTrendingNavbar">
          <Link href="/tags"  className="linkNavbar" >
            Tags
          </Link>
        </li>

        <li className="liTrendingNavbar">
          <Link href="/blogs"  className="linkNavbar" >
            Blogs
          </Link>
        </li>

      </ul>
    </nav>

    <div className="horizontal_line">
        <hr className="hrLine" />
      </div>

      <div className='tagsOnTrending_SeeAllTagsBtn'>
      <h2 className='headingfor_tagsOnTrending_SeeAllTagsBtn'>Trending Tags</h2>
      <p className='btnFor_tagsOnTrending_SeeAllTagsBtn'>See all tags</p>
      </div>

      <div className='blogCards'>
      
        {tags.map((items,index)=>{
          if(index<=5){
        return(
          <CardsofBlogs key={items.id} name={items.name}
           NoOfArticles={items.NoOfArticles} imgSrc={items.imgSrc}/>
        )
      }
          
      })}  
     


         
      </div>

      <div className='tagsOnTrending_SeeAllTagsBtn'>
      <h2 className='headingfor_tagsOnTrending_SeeAllTagsBtn'>Newly Added Tags</h2>
      </div>

      <div className='NewlyAddedTags'>
      {newTags.map((items)=>{
        return(
        <NewlyAddedCards key={items.id} name={items.name}/>
        )
      })}
       
        
      </div>


      <div className="hor_line">
        <hr className="hrLine" />
      </div>


<div className='trendingTechBlogsHeadings'>
<h2 className='headingfor_tagsOnTrending_SeeAllTagsBtn'>Trending Tech Blogs</h2>
      <p className='btnFor_tagsOnTrending_SeeAllTagsBtn'>See all blogs</p>
</div>
      <div className='techBlogs'>
      {trendigTechBlogs.map((item)=>{
  return(
    <TechBlogCards key={item.id} name={item.name} websitename={item.websitename}
      number={item.number} date1={item.date1} date2={item.date2} date3={item.date3}
      desc1={item.desc1} desc2={item.desc2} desc3={item.desc3}
    />
  )
})}
 


      </div>
      


      <div className='tagsOnTrending_SeeAllTagsBtn'>
      <h2 className='headingfor_tagsOnTrending_SeeAllTagsBtn'>New And NoteWorthy 
      Tech Blogs</h2>
      </div>

      <div className='netWorthyTechBlogs'>
      

      {trendigTechBlogs.map((item)=>{
  return(
    <ShortCardsNotWorthy key={item.id} name={item.name} websitename={item.websitename}
      number={item.number} 
    />
  )
})}
      
      
      </div>
     



      <div className='GrowingDevCardLast'>
       <LastJoinAndLoginCard/>
      </div>
      
      
       
      
     
       
    </>
  )
}

export default TrendingTags
