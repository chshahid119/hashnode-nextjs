import React from "react";
import Explore from "@/components/Explore";
import Trending from "@/components/Trending";
import TrendingTags from "@/components/TrendingTags";
import WrittingChallenges from '@/components/WrittingChallenges'
import "@/styles/mainPage.css";

export default function page() {
  return (
    <div className="root">
      <div className="blog_trends">
        <div className="explore_blogs">
        <div>
          <div className="RightSide">
            <Explore />
          </div>
          <div className="trendingTags">
           <TrendingTags/>
          </div>
        </div>
        
        </div>

        <div className="trends">
        <Trending />
        </div>
          
         
          
        
        </div>
      </div>
    
  );
}
