"use client";

// Other Posts in trending Area of side
import {useState} from "react";
export const Post = ({ name, blogName }) => {


  const [likes, setLikes] = useState(233);
  const [changeIcon, setChangeIcon] = useState(false);
  const LikesIncrease = () => {
    if (likes == 233) {
      setLikes(234);
      setChangeIcon(true);
    } else {
      setLikes(233);
      setChangeIcon(false);
    }
  };
  return (
    <>
      <div className="profile_Name">
        <div className="profile">
          <svg
            className="profile1"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </div>
        <div className="name_others">
          <h4>{blogName}</h4>
          <p className="authorName">{name}</p>
          <div className="likes">
            <div>
            {changeIcon ?   (
                <svg
                  onClick={LikesIncrease}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="LikeIcon bi bi-hand-thumbs-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                </svg>
              ):(
  <svg
    onClick={LikesIncrease}
    class="css-pbhbmr LikeIcon"
    viewBox="0 0 512 512"
  >
    <path
      d="M88 192H40c-22.06 0-40 17.9-40 40v208c0 22.1
17.94 40 40 40h48c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zm8 
248c0 4.4-3.59 8-8 8H40c-4.41 0-8-3.6-8-8V232c0-4.4 3.59-8 8-8h48c4.41
0 8 3.6 8 8v208zm416-218.5c0-33.9-27.6-61.5-61.5-61.5H348c11.98-27.06
18.83-53.48 18.83-67.33C366.9 62.84 343.6 32 304.9 32c-41.22 0-50.7 
29.11-59.12 54.81C218.1 171.1 160 184.8 160 208c0 9.1 7.5 16 16 16 4.1 
0 8.2-1.6 11.3-4.7 52.68-53.04 67.02-56.11 88.81-122.5C285.3 68.95 
288.2 64 304.9 64c20.66 0 29.94 16.77 29.94 28.67 0 10.09-8.891 
43.95-26.62 75.48a15.976 15.976 0 0 0-2.046 7.83C306.2 185.5 314 
192 322.2 192h128.3c16.3 0 29.5 13.2 29.5 29.5 0 15.33-12.08
28.16-27.48 29.2-8.462.581-14.91 7.649-14.91 15.96 0 12.19 
12.06 12.86 12.06 30.63 0 14.14-10.11 26.3-24.03 28.89-5.778
 1.082-13.06 6.417-13.06 15.75 0 8.886 6.765 10.72 6.765 
 23.56 0 31.02-31.51 22.12-31.51 43.05 0 3.526 1.185 5.13 
 1.185 10.01C389 434.8 375.8 448 359.5 448h-55.6c-82.01 
 0-108.3-64.02-127.9-64.02-8.873 0-16 7.193-16 15.96-.9 
 16.36 64.6 80.06 143.9 80.06h55.63c33.91 0 61.5-27.58 
 61.5-61.47 18.55-10.86 30.33-31 30.33-53.06 0-4.797-.594-9.594-1.734-14.27 19.31-10.52 32.06-30.97 32.06-53.94 0-7.219-1.281-14.31-3.75-20.98C498.2 
 266.2 512 245.3 512 221.5z"
    ></path>
  </svg>
)}
            </div>
            <div className="likesCount">{likes}</div>
          </div>
        </div>
      </div>
      <div className="horizontal_line">
        <hr className="hrLine" />
      </div>
    </>
  );
};

import "@/styles/TrendingCards.css";
import JsImage from "@/src/images/JS.png";
import Image from "next/image";
export const CardsofBlogs = ({name,NoOfArticles}) => {
  // console.log(name,NoOfArticles)
  return (
    <>
      <div className="trendingCards">
        <div className="NameCard_ImageCard card">
          <div className="NameLogo card">
            <Image className="CardImg" src={JsImage} alt="noImage" />
          </div>
          <div className="CardName_NoOfArticles card">
            <h5 className="cardName">{name}</h5>
            <p className="noOfArticles">{NoOfArticles}</p>
          </div>
          <div className="addMoreArrticlesLogo card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-plus-circle addArticleIcon card"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

import LinodeImage from "@/src/images/linode.png";
export const NewlyAddedCards = ({name}) => {
  return (
    <>
      <div className="NewlyAddedTagsFinalDiv">
        <div className="logoForNewlyAddedTags card2">
          <Image className="CardImg" src={LinodeImage} alt="noImage" />
        </div>
        <div className="NameOfNewlyAddedTag card2">
          <h3 className="newlyAddedTagsCardName">{name}</h3>
        </div>
        <div className="AddMoreNewlyAddedTagIcon card2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-plus-circle addArticleIcon "
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export const FollowBtnAndNumberOfBlogs = ({number,name,websitename}) => {
  return (
    <>
      <div className="BlogNumber_Logo_Name_Follow">
        <div className="logoAndNumber">
          <div className="Number">
            <h3>{number}</h3>
          </div>
          <div className="BlogImg_Names">
            <div className="BlogImg">
              <Image
                className="ImageofTechBlog"
                src={TechBlog1}
                alt="no image"
              />
            </div>
            <div className="BlogName_SiteName">
              <h4>{name}</h4>
              <p>{websitename}</p>
            </div>
          </div>
        </div>
        <div className="FollowButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <div className="followBtn">Follow</div>
        </div>
      </div>
    </>
  );
};

export const ShortCardsNotWorthy = ({number,websitename,name}) => {
  return (
    <>
      <div className="BlogPostsTechNoteWrothyBlogs">
        <div className="BlogNumber_Logo_Name_Follow">
          <div className="logoAndNumber">
            <div className="Number">
              <h3>{number}</h3>
            </div>
            <div className="BlogImg_Names">
              <div className="BlogImg">
                <Image
                  className="ImageofTechBlog"
                  src={TechBlog1}
                  alt="no image"
                />
              </div>
              <div className="BlogName_SiteName">
                <h4>{name}</h4>
                <p>{websitename}</p>
              </div>
            </div>
          </div>
          <div className="FollowButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <div className="followBtn">Follow</div>
          </div>
        </div>
      </div>
    </>
  );
};

import { React, useEffect } from "react";
import "@/styles/TechBlogsCards.css";
import TechBlog1 from "@/src/images/TechBlog1.PNG";
export const TechBlogCards = ({number,name,websitename,date1,desc1,date2,desc2,date3,desc3}) => {

  return (
    <>
      <div className="BlogPostsTech">
        <FollowBtnAndNumberOfBlogs number={number} websitename={websitename} name={name} />

        <div className="Date_BlaogDescription">
          <div className="descriptionOne">
            <div className="BlogPostingDate ">
              <p>{date1}</p>
            </div>
            <div className="BlogDescription ">
              <p>{desc1}</p>
            </div>
          </div>

          <div className="descriptionOne">
            <div className="BlogPostingDate ">
              <p>{date2}</p>
            </div>
            <div className="BlogDescription ">
              <p>
                {desc2}
              </p>
            </div>
          </div>

          <div className="descriptionOne">
            <div className="BlogPostingDate ">
              <p>{date3}</p>
            </div>
            <div className="BlogDescription ">
              <p>
                {desc3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


import '@/styles/LastJoinAndLoginCard.css'
export const LastJoinAndLoginCard = () => {
  return (
    <>
    <div className="JoinForGrowing_MillionsPara_GetStarted_Login" >
    <div className="packInAllThingstoLoginLastCard">
      <div className="Growing_h2">
        <h2>Join a growing dev community of millions of active developers!</h2>
      </div>
      <div className="DescriptionParagraph_MillionsPara">
        <p>Millions of tech blogs publish on Hashnode daily. Be a part of an 
        active community of developers, tech enthusiasts and creators.
         Blog on your personal domain,share ideas, and connect with the global
          tech community.</p>
      </div>
      <div className="GetStarted_itsFreeBtn">
        <p>Get Started - it's free</p>
      </div>
      <div className="LoginBtn">
        <p className="loginBtnPara"> Login</p>
      </div>
      </div>
      </div>
    </>
  );
};

import Arrow from '@/src/images/arrow.png';
import Adds from '@/src/images/ads.png';
import SangliImage from '../src/images/sangli.png'
export const HomePageBlogsCards=()=>{
return(
  <>
    <div className="BlogOnYourPersonalDomain">
        <Image src={SangliImage} alt='no img'/>
        <h2 className="headingblogArrowAds">Blog on your personal domain</h2>
        <p className="Adspara">Map your custom domain in just seconds. Serve your blog over HTTPS with no extra configuration. Get a high performance, secure, and fully-optimized dev blog that delights your readers.</p>
        </div>

        <div className="InstantlyFindYourAudience">
        <Image src={Arrow} alt='no img'/>
        <h2 className="headingblogArrowAds">Instantly find your audience</h2>
        <p className="Adspara">Every time you write an article, Hashnode publishes it on your domain and shares it with the dev community members on the homepage. The readers are directed to your website to read and interact with your content.</p>
        </div>
        
        <div className="No_annoyingAds_pop_ups">
        <Image src={Adds} alt='no img'/>
        <h2 className="headingblogArrowAds">No annoying ads/pop-ups</h2>
        <p className="Adspara">Knowledge sharing on Hashnode is and will always be completely free. Because we value the relationship between you and your readers, we won't show ads or pop-ups on your articles.</p>
        </div>
  </>
)
}

import "@/styles/Bookmarks.css"
import GoogleImg from '@/src/images/google.png'
export const AuthOptions=({name})=>{
  return(
    <>
        <div className='googleAuth'>
            <Image className="CompanyName " width={40} height={40} src={GoogleImg} alt='no img'/>
            <p className="ContinuewithWhat ">{name}</p>
          </div>
    </>
  )
}



