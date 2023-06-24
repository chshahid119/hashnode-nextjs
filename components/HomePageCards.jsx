import React from "react";
import Image from "next/image";
import SideImageOfHome from '@/src/images/sideimg.PNG'
import FounderImage from '@/src/images/founderImage.jpeg'
import {HomePageBlogsCards} from '@/components/Clients2'
import KeyNotes from '@/src/images/EverythingyouneedImg.PNG';
import Git from '@/src/images/git.png';
import Markdown from '@/src/images/markdown.PNG'
import Earth from '@/src/images/earth.png'
import Charge from '@/src/images/charge.png'
import Footer from "./Footer";
import '@/styles/footer.css'
const HomePageCards = () => {
  return (
    <>
      <div className="HomeFortechWritersandReaders_JoinCommunity">
        <div className="Hometechwriters_para_getStartedFree">
        <div className="Headers">
          <div className="HomeforTech">
            <h1>
              <span>Home</span> for tech writers and readers
            </h1>
          </div>
          <div className="TheHasslaPara">
            <p>
              The hassle-free blogging platform for engineers, thought-leaders,
              and the dev community!
            </p>
          </div>
          </div>
          <div className="BlogRefer_button">
            <h4 className="BlogonCustom">
              Blog on a custom domain, own your content and share your ideas
              with the world.
            </h4>
            <div className="getStartedItsFreeBtn">
            <p >Get started - it's free!</p>
            </div>
            
          </div>
        </div>
        <div className="SideImageofHomePage">
            <Image className="circleImagewithComputer" src={SideImageOfHome} alt='no Image'/>
        </div>


        

       
      </div>


      

      <div className="AllUnder">
      <div className="FounderFreeCodeCampReview">
      <div className="MessageCard">
        <div className="FounderImage">
       <Image className="imgofFounder" src={FounderImage} alt='no image'/>
        </div>
        <div className="FounderMessage">
           <p>"You can start a dev blog in just a few seconds using Hashnode and then you can move that to your own domain if you get one later. They will even help distribute your articles on their platform. By far the best place to create a blog, imho."</p>
           <h5>Quincy Larson, Founder freeCodeCamp </h5>
           <div className="JoinCommunity">
           <p className="joinCommunityBtn"> Join the community</p>
           </div>
           
        </div>
</div>

        </div>
        
      </div>



      <div className="NoAds_NoPaywall">
      <div className="centerTheNoAdsHeading">
      <div className="ownContent">
      <h3 >OWN YOUR CONTENT</h3>
      </div>
      
  <div className="headingNoAds">
      <h1>No Ads. &nbsp;No Paywall.<span>  No Kidding</span></h1>
  </div>
      </div>
      <div className="Blog_Audience_NoAds">
        <HomePageBlogsCards/>
      </div>




      <div className="keyfeatures">
      
      <div className="EverythingThatYouNeed">
      <div className="keyfeature_h1">
      <h5>KEY FEATURES</h5>
       <h1>Everything you need to start blogging as a developer!</h1>
      </div>
      
       <Image src={KeyNotes} alt="no img"/>
      </div>

      </div>



      <div className="Git_Write_Map_Superfast">
   


      <div >
      <div className="Git">
     <div className="gitLogo">
   <Image src={Git} alt="no img" width={42}/>
     </div>
     <div className="gitHeading_Para">
            <h4>
            Automatic GitHub Backup
            </h4>
            <p>
            Every time you publish an article on your tech blog, a markdown version of the post is pushed to your private GitHub repo as a backup.
            </p>
     </div>
     </div>
     </div>

     <div >
      <div className="Git">
     <div className="gitLogo">
   <Image src={Markdown} alt="no img" width={42}/>
     </div>
     <div className="gitHeading_Para">
            <h4>
            Automatic GitHub Backup
            </h4>
            <p>
            Every time you publish an article on your tech blog, a markdown version of the post is pushed to your private GitHub repo as a backup.
            </p>
     </div>
     </div>
     </div>


     <div >
      <div className="Git">
     <div className="gitLogo">
   <Image src={Earth} alt="no img" width={42}/>
     </div>
     <div className="gitHeading_Para">
            <h4>
            Automatic GitHub Backup
            </h4>
            <p>
            Every time you publish an article on your tech blog, a markdown version of the post is pushed to your private GitHub repo as a backup.
            </p>
     </div>
     </div>
     </div>

     <div >
      <div className="Git">
     <div className="gitLogo">
   <Image src={Charge} alt="no img" width={42}/>
     </div>
     <div className="gitHeading_Para">
            <h4>
            Automatic GitHub Backup
            </h4>
            <p>
            Every time you publish an article on your tech blog, a markdown version of the post is pushed to your private GitHub repo as a backup.
            </p>
     </div>
     </div>
     </div>
     {/* <div className="horizontalLine">
      <hr className="hrLine"/>
     </div> */}

     
      </div>
      <div className="footer">
           <Footer/>
      </div>

      </div>

      </>
      
  );
};

export default HomePageCards;
