"use client";

const DropDownMenu = () => {
  return (
    <>
      <ul className="dropdown-menu">
        <li>
          <Link href="/hackathons" className="dropdown-link">
            Hackathons
          </Link>
        </li>
        <li>
          <Link href="/Downloadapp" className="dropdown-link">
            Download App
          </Link>
        </li>
        <li>
          <Link href="/logo&media" className="dropdown-link">
            Logo & media
          </Link>
        </li>
      </ul>
    </>
  );
};
import "@/styles/Clients.css";
import Logo_img from "@/src/images/logo.png";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="logo_image">
      <Image className="logo" src={Logo_img} alt="hashnode" />
      <Link
        style={{ textDecoration: "none" }}
        className="BrandNameLink"
        href="/"
      >
        <h3 className="brandName">hashnode</h3>
      </Link>
    </div>
  );
};

import classNames from "classnames";
import Link from "next/link";
export const NavigationBar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const showDropDownMenu = () => {
    setDropDownMenu(true);
    console.log(dropDownMenu);
  };
  const hideDropDownMenu = () => {
    setDropDownMenu(false);
  };

  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <nav>
      <ul class="navbar">
        <li
          className={classNames("nav-item", {
            active: activeLink === "myfeed",
          })}
        >
          <Link href="/myfeed" className="nav-link">
            My Feed
          </Link>
        </li>

        <li
          className={classNames("nav-item", {
            active: activeLink === "explore",
          })}
        >
          <Link href="/explore" className="nav-link">
            Explore
          </Link>
        </li>

        <li
          className={classNames("nav-item", {
            active: activeLink === "bookmarks",
          })}
        >
          <Link href="/bookmarks" className="nav-link">
            Bookmarks
          </Link>
        </li>

        <li className="nav-item dropdown">
          <p
            onClick={showDropDownMenu}
            onDoubleClick={hideDropDownMenu}
            className="nav-link dropdown-toggle"
          >
            More
            <span className="dropdownicon">
              <svg
                onClick={showDropDownMenu}
                onDoubleClick={hideDropDownMenu}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </p>

          {dropDownMenu ? <DropDownMenu /> : null}
        </li>
      </ul>
    </nav>
  );
};

import LastUpdateIcon from "@/src/images/lastupdates.png";

export const WriteBlog = () => {
  // const [search, setSearch] = useState(true);

  // const openSearchTab = () => {
  //   setSearch(true);
  // };

  return (
    <>
    <div className="side_navbar">
      <nav className="rix">
        <Link className="pRix" href="/rix">
          Rix
        </Link>
        <span className="css-8sx8dt newicon">New</span>
      </nav>

      <div className="searchIcon" >
        <svg
          
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-search SearchingIconInnerClass"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
     

      <div className="writeHere">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-pencil-square writeicon"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
        Write
      </div>

      <div className="lastupdates">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-brightness-high icons"
          viewBox="0 0 16 16"
        >
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </svg>

        <svg
          className="bi bi-bell icons"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
        </svg>

        <svg
          className="bi bi-person-circle login icons"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </div>
    </div>
    
      </>
  );
};

const AddMorePostsOnUI = () => {
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
          <h4>Collab Verse</h4>
          <p className="NameofAuthor">Neha Goyal</p>
          <div className="likes">
            <div>
              <svg class="css-pbhbmr LikeIcon" viewBox="0 0 512 512">
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
            </div>
            <div className="likesCount">148</div>
          </div>

          <div className="comments">
            <div>
              <svg class="css-pbhbmr commentIcon" viewBox="0 0 640 512">
                <path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 41.48 17.07 79.54 45.44 109.6-15.17 32.34-38.65 58.07-38.95 58.38-6.514 6.836-8.309 16.91-4.568 25.67C5.754 378.4 14.26 384 23.66 384c54.19 0 97.76-20.73 125.9-39.17C168.1 349.4 187.7 352 208 352c114.9 0 208-78.8 208-176zM208 320c-16.96 0-34.04-2.098-50.75-6.232L143.7 310.4l-11.7 7.7c-20.43 13.38-51.58 28.99-89.85 32.97 9.377-12.11 22.3-30.63 32.24-51.82l9.242-19.71L68.72 263.7C44.7 238.2 32 207.9 32 176c0-79.4 78.1-144 176-144s176 64.6 176 144-79 144-176 144zm398.4 115.4c21.2-28.3 33.6-62.5 33.6-99.4 0-97.2-86-176-192-176-.315 0-.62.041-.934.043C447.5 165.3 448 170.6 448 176c0 5.43-.467 10.76-.941 16.09.341.01.641-.09.941-.09 88.22 0 160 64.6 160 144 0 28.69-9.424 56.45-27.25 80.26l-13.08 17.47 11.49 18.55c6.568 10.61 13.18 19.74 18.61 26.74-18.26-1.91-36.45-6.625-54.3-14.09l-12.69-5.305-12.58 5.557C495.9 475 472.3 480 448 480c-75.05 0-137.7-46.91-154.9-109.7-10.1 3.336-20.5 6.132-31.2 8.271C282.7 455.1 357.1 512 448 512c29.82 0 57.94-6.414 83.12-17.54C555 504.5 583.7 512 616.3 512c9.398 0 17.91-5.57 21.73-14.32 3.74-8.758 1.945-18.84-4.568-25.67-.162-.21-13.862-15.21-27.062-36.61z"></path>
              </svg>
            </div>
            <div className="commentsCount">14</div>
          </div>
        </div>
      </div>
      <div className="horizontal_line">
        <hr className="hrLine" />
      </div>

      <div className="blogs">
        <Post
          name="Iresh Sharma"
          blogName="Mindful-me:A 
       mental health tracker for the modern world"
          likes="109"
        />
      </div>
      <div className="blogs">
        <Post
          name="Nehha Gupta"
          blogName="Diverse Test Data: Boosting
       Regression Testing Efficeincy"
          likes="81"
        />
      </div>
    </>
  );
};

// 1 week client component
import User1 from "@/src/images/profile.avif";
import { Post } from "@/components/Clients2";
import { useState } from "react";

export const WeeklyPosts = () => {
  const [showMorePosts, setShowMorePosts] = useState(false);
  const [likes, setLikes] = useState(149);
  const [changeIcon, setChangeIcon] = useState(false);
  

  const ShowMorePostsOnUI = () => {
    setShowMorePosts(true);
  };

  const HideMorePostsOnUI = () => {
    setShowMorePosts(false);
  };

  const LikesIncrease = () => {
    if(likes==149){
      setLikes(150);
      setChangeIcon(true);
    }
    else if(likes==150){
      setLikes(149)
      setChangeIcon(false)
    }
      
  }
    


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
          <h4>Collab Verse</h4>
          <p className="NameofAuthor">Neha Goyal</p>
          <div className="likes">
            <div>
              {changeIcon ?  (
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
) }

            </div>
            <div className="likesCount" onClick={LikesIncrease}>
              {likes}
            </div>
          </div>

          <div className="comments">
            <div>
              <svg class="css-pbhbmr commentIcon" viewBox="0 0 640 512">
                <path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 41.48 17.07 79.54 45.44 109.6-15.17 32.34-38.65 58.07-38.95 58.38-6.514 6.836-8.309 16.91-4.568 25.67C5.754 378.4 14.26 384 23.66 384c54.19 0 97.76-20.73 125.9-39.17C168.1 349.4 187.7 352 208 352c114.9 0 208-78.8 208-176zM208 320c-16.96 0-34.04-2.098-50.75-6.232L143.7 310.4l-11.7 7.7c-20.43 13.38-51.58 28.99-89.85 32.97 9.377-12.11 22.3-30.63 32.24-51.82l9.242-19.71L68.72 263.7C44.7 238.2 32 207.9 32 176c0-79.4 78.1-144 176-144s176 64.6 176 144-79 144-176 144zm398.4 115.4c21.2-28.3 33.6-62.5 33.6-99.4 0-97.2-86-176-192-176-.315 0-.62.041-.934.043C447.5 165.3 448 170.6 448 176c0 5.43-.467 10.76-.941 16.09.341.01.641-.09.941-.09 88.22 0 160 64.6 160 144 0 28.69-9.424 56.45-27.25 80.26l-13.08 17.47 11.49 18.55c6.568 10.61 13.18 19.74 18.61 26.74-18.26-1.91-36.45-6.625-54.3-14.09l-12.69-5.305-12.58 5.557C495.9 475 472.3 480 448 480c-75.05 0-137.7-46.91-154.9-109.7-10.1 3.336-20.5 6.132-31.2 8.271C282.7 455.1 357.1 512 448 512c29.82 0 57.94-6.414 83.12-17.54C555 504.5 583.7 512 616.3 512c9.398 0 17.91-5.57 21.73-14.32 3.74-8.758 1.945-18.84-4.568-25.67-.162-.21-13.862-15.21-27.062-36.61z"></path>
              </svg>
            </div>
            <div className="commentsCount">14</div>
          </div>
        </div>
      </div>
      <div className="horizontal_line">
        <hr className="hrLine" />
      </div>

      <div className="blogs">
        <Post
          name="Iresh Sharma"
          blogName="Mindful-me:A 
       mental health tracker for the modern world"
          likes="109"
        />
      </div>
      <div className="blogs">
        <Post
          name="Nehha Gupta"
          blogName="Diverse Test Data: Boosting
       Regression Testing Efficeincy"
          likes="81"
        />
      </div>

      <div className="showMore">
        <h4
          className="showMoreHeading"
          onDoubleClick={HideMorePostsOnUI}
          onClick={ShowMorePostsOnUI}
        >
          Show More
        </h4>
        <svg
          onClick={ShowMorePostsOnUI}
          onDoubleClick={HideMorePostsOnUI}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-down dropDownIcon"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>

      <div className="PostsAfterShowMoreClick">
        {showMorePosts ? <AddMorePostsOnUI /> : null}
      </div>
    </>
  );
};

// one Month posts
export const MonthPosts = () => {
  return (
    <>
      <div className="blogs">
        <Post
          name="Ritika Okonkwo"
          blogName="One Year as a 
       Software Engineer at Microsoft"
          
        />
      </div>
      <div className="blogs">
        <Post
          name="Dhruvi Thakkar"
          blogName="Keploy: Streamlining API Testing and Mocking !"
          
        />
      </div>
      <div className="blogs">
        <Post
          name="Iresh Sharma"
          blogName="Mindful-me:A 
       mental health tracker for the modern world"
          
        />
      </div>
      <div className="blogs"></div>
    </>
  );
};

// three month Posts
export const ThreeMonthPosts = () => {
  return (
    <>
      <div className="blogs">
        <Post
          name="Iresh Sharma"
          blogName="Mindful-me:A 
       mental health tracker for the modern world"
          likes="109"
        />
      </div>
      <div className="blogs">
        <Post
          name="Nehha Gupta"
          blogName="Diverse Test Data: Boosting
       Regression Testing Efficeincy"
          likes="81"
        />
      </div>
      <div className="blogs">
        <Post
          name="Iresh Sharma"
          blogName="Mindful-me:A 
       mental health tracker for the modern world"
          likes="109"
        />
      </div>
    </>
  );
};
