import React from 'react'
import '@/styles/Bookmarks.css'
import Image from 'next/image'
import vercelCeo from '@/src/images/vercelceo.PNG'
import {AuthOptions} from '@/components/Clients2'



const page = () => {
  return (
    <>
      <div className='SignUHeading'>
      <h2>Sign up / Log in</h2>
    </div>
    <div className='SignUp_Login'>
  
       <div className='Authentication_Options'>
          <AuthOptions name='Continue with Google'/>
          <AuthOptions name='Continue with Github' />
          <AuthOptions name='Continue with Linkedin' />
          <AuthOptions name='Continue with Facebook' />
          <AuthOptions name='Continue with Apple' />
          
          
       </div>

       <div className='CeoVersalMsg'>
       <p className='ceoVerselMsg'>"It's amazing to see how fast devs go from 0 to Blog under a domain they own on Hashnode 🤯. It reminds me a lot of what Substack did for journalists."</p>
        <div className='CeoVersal'>
        <div className='imageceoversal'>
        <Image className='ceoImg' width={60} height={60} src={vercelCeo} alt='no img'/>
        </div>
        <div className='NameCeo_Dest'>
         <p>Guillermo Rauch</p>
         <p>CEO,Vercel</p>
        </div>

        </div>
       </div>

     
    </div>
    </>
  )
}

export default page
