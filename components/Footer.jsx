"use client"
import React from 'react'
import Link from 'next/link'
import BlueLogo from '@/src/images/BlueLogo.png'
import Image from 'next/image'
import '@/styles/HomePage.css'

const Footer = () => {
  return (
    <>
    <div className='Footer'>
    <div className='Explore explore '>
    <h3>Explore</h3>
    <div className='links'><Link className='footerLink'  href='/'>Community</Link></div>
    
    <div className='links'><Link className='footerLink'  href='/'>Trending Blogs</Link></div>
    <div className='links'><Link className='footerLink'  href='/'>Hashnode for Teams</Link></div>
    <div className='links'><Link  className='footerLink' href='/'>Hashnode APIs</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Host a virtual Hackathon</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Hashnode Neptune</Link></div>

    </div>
    <div className='Explore premium'>
    <h3>Premium</h3>

    <div className='links'><Link className='footerLink' href='/'>Hashnode Pro</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Hashnode AI</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Company</Link></div>
    <div className='links'><Link className='footerLink' href='/'>About Hashnode</Link></div>
    <div className='links'><Link  className='footerLink'  href='/'>Careers</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Logos & Media</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Changelop</Link></div>

    </div>
    <div className='Explore comparisons'>
    <h3>Comparisons</h3>
    <div className='links'><Link className='footerLink'  href='/'>Hashnode vs Medium</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Hashnode vs Ghost</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Hashnode vs WrodPress</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Hashnode vs Dev.to</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Hashnode vs SubStack</Link></div>
    <div className='links'><Link className='footerLink'  href='/'>Wordpress vs Substack vs Hashnode</Link></div>
    <div className='links'><Link className='footerLink'  href='/'>Medium vs Substack vs Hashnode</Link></div>
    

    </div>
    <div className='Explore support'>
    <h3 >Support</h3>
    <div className='links'><Link className='footerLink'  href='/'>Support Docs</Link></div>
    <div className='links'><Link className='footerLink'  href='/'>Contacts</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Join Discord</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Feature Requests</Link></div>
   
    </div>
    <div className='Explore officialBlogs'>
    <h3>Official Blogs</h3>
    <div className='links'><Link className='footerLink' href='/'>Officail Blog</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Engineering Blog</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Partner With Us</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Hashnode APIs</Link></div>
    <div className='links'><Link className='footerLink' href='/'>Host a Hackathon</Link></div>
   

    </div>

    </div>

    <div className='CopyRight_Policies'>
        <div className='copyright'>
          <p>&copy; Hashnode 2023</p>
        </div>
        <div className='privacyPolicy'>
            <Link className='copyrightLinks' href='/policy'>Privacy Policy</Link>
            <Link className='copyrightLinks' href='/policy'>Terms</Link>
            <Link className='copyrightLinks' href='/policy'>Code of Conduct</Link>
        </div>
    </div>

    <div className='logAndHashnode'>
<div className='log_NameOfCompany'>
    <Image width={70} height={70} className='BlueLogo' src={BlueLogo} alt='no img'/>
    <h3 className='lastHashnode'>Hashnode</h3>
</div>
    </div>
      
    </>
  )
}

export default Footer
