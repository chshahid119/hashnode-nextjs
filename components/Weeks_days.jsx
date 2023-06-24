"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WeeklyPosts } from "@/components/Clients";
import {MonthPosts} from '@/components/Clients';
import {ThreeMonthPosts} from '@/components/Clients';
import "@/styles/weekdays.css";

const Weeks_days = () => {
  const [week,setWeek]=useState(true)
  const [oneMonth,setOneMonth]=useState(false)
  const [months,setMonths]=useState(false)
  const showPosts = () => {
      setWeek(true)
      setOneMonth(false)
      setMonths(false)
  };

  const oneMonthPosts=()=>{
    setOneMonth(true)
    setWeek(false)
    setMonths(false)
   
  }

  const MonthsPosts=()=>{
    setMonths(true)
    setWeek(false)
    setOneMonth(false)
  }
  return (
    <div>
      <nav className="daysNavbar">
        <p className="week trendingTypes" value='1' onClick={showPosts} >
          1 week
        </p>
        <p className="month trendingTypes" value='2' onClick={oneMonthPosts} >
          1 month
        </p>
        <p className="months trendingTypes" value='3' onClick={MonthsPosts} >
          3 months
        </p>
      </nav>
      <div className="horizontal_line">
       <hr className="hrLine"/>
      </div>

      <div>
        <p>
          {week ? <WeeklyPosts/> : null} 
          {oneMonth ? <MonthPosts/> : null }
          {months ? <ThreeMonthPosts/> : null }
        </p>
      </div>
    </div>
  );
};

export default Weeks_days;


