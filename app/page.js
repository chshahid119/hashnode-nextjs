import React from "react";
import HomePageIntroduceHashnodePro from '@/components/HomePageIntroduceHashnodePro'
import HomePageCards from '@/components/HomePageCards'
import '@/styles/HomePageCards.css'
import '@/styles/HomePage.css'
import "@/styles/mainPage.css";

export const metadata = {
  title: 'Hashnode Blogging site',
  description: 'Generated by create next app',
}

export default function Home() {
  return (
    <>
      <div className="HomePage">
      <div className="HashnodePro">
         <HomePageIntroduceHashnodePro/>
      </div>
      <div className="mainHomePage">
      <HomePageCards/>
      </div>

      </div>
    </>
  );
}
