// pages/api/tags.js
// import Image from '../../src/images/react.PNG'
export default function handler(req, res) {
  const trendingTags = [
    {
      id: 1,
      name: "JavaScript",
      NoOfArticles: "272 articles this week",
      
    },
    {
      id: 2,
      name: "Web Development",
      NoOfArticles: "232 articles this week",
      
    },
    {
      id: 3,
      name: "React",
      NoOfArticles: "146 articles this week",
      
    },
    {
      id: 4,
      name: "DevOps",
      NoOfArticles: "263 articles this week",
     
    },
    {
      id: 5,
      name: "Appwrite",
      NoOfArticles: "120 articles this week",
      
    },
    {
      id: 6,
      name: "Cyber Security",
      NoOfArticles: "121 trticles this week",
      
    },
    {
      id: 7,
      name: "Hackings",
      NoOfArticles: "121 trticles this week",
    
    },
    {
      id: 8,
      name: "Ethical Hacking",
      NoOfArticles: "121 trticles this week",
     
    },
  ]
  const newlyAddedTags=[
    {
      id:1,
      name:'Linode'
    },
    {
      id:2,
      name:'Linode'
    },
    {
      id:3,
      name:'AppWrite'
    },
    {
      id:4,
      name:'AppWrite'
    },
    {
      id:5,
      name:'AppWrite'
    },
    {
      id:6,
      name:'Web App'
    }
  ]

  const trendingTechBlogs=[
    {
      id:1,
      number:"#1",
      websiteName:'aptgetops.tech',
      name:'apt-get ops',
      date1:'5 Nov,2022',
      date2:'24 Oct,2022',
      date3:'13 Oct,2022',
      desc1:'Increase infrastructure Visibilty Using DataDog',
      desc2:'Infrastructure Monitoting: The Basics (New Series!) Visibility Using DataDog',
      desc3:'Return to Normal:Why I have Been Gone and when New Material isd Coming!',
    },
    {
      id:2,
      number:"#2",
      websiteName:'aptgetops.tech',
      name:'apt-get ops',
      date1:'5 Nov,2022',
      date2:'24 Oct,2022',
      date3:'13 Oct,2022',
      desc1:'Increase infrastructure Visibilty Using DataDog',
      desc2:'Infrastructure Monitoting: The Basics (New Series!) Visibility Using DataDog',
      desc3:'Return to Normal:Why I have Been Gone and when New Material isd Coming!',
    },
    {
      id:3,
      number:"#3",
      websiteName:'aptgetops.tech',
      name:'apt-get ops',
      date1:'5 Nov,2022',
      date2:'24 Oct,2022',
      date3:'13 Oct,2022',
      desc1:'Increase infrastructure Visibilty Using DataDog',
      desc2:'Infrastructure Monitoting: The Basics (New Series!) Visibility Using DataDog',
      desc3:'Return to Normal:Why I have Been Gone and when New Material isd Coming!',
    },
    {
      id:4,
      number:"#4",
      websiteName:'aptgetops.tech',
      name:'apt-get ops',
      date1:'5 Nov,2022',
      date2:'24 Oct,2022',
      date3:'13 Oct,2022',
      desc1:'Increase infrastructure Visibilty Using DataDog',
      desc2:'Infrastructure Monitoting: The Basics (New Series!) Visibility Using DataDog',
      desc3:'Return to Normal:Why I have Been Gone and when New Material isd Coming!',
    },
    {
      id:5,
      number:"#5",
      websiteName:'aptgetops.tech',
      name:'apt-get ops',
      date1:'5 Nov,2022',
      date2:'24 Oct,2022',
      date3:'13 Oct,2022',
      desc1:'Increase infrastructure Visibilty Using DataDog',
      desc2:'Infrastructure Monitoting: The Basics (New Series!) Visibility Using DataDog',
      desc3:'Return to Normal:Why I have Been Gone and when New Material isd Coming!',
    },
    {
      id:6,
      number:"#6",
      websiteName:'aptgetops.tech',
      name:'apt-get ops',
      date1:'5 Nov,2022',
      date2:'24 Oct,2022',
      date3:'13 Oct,2022',
      desc1:'Increase infrastructure Visibilty Using DataDog',
      desc2:'Infrastructure Monitoting: The Basics (New Series!) Visibility Using DataDog',
      desc3:'Return to Normal:Why I have Been Gone and when New Material isd Coming!',
    },

  ]

  res.status(200).json({ success: true, trendingTags,newlyAddedTags,trendingTechBlogs });
}

// export default function handler(req, res) {
//     const trendingTags = [
//       {
//         id: 1,
//         name: "JavaScript",
//         NoOfArticles: "256 Articles this week",
//       },
//       {
//         id: 2,
//         name: "AWS",
//         NoOfArticles: "210 Articles this week",
//       },
//       {
//         id: 3,
//         name: "JavaScript",
//         NoOfArticles: "256 Articles this week",
//       },
//       {
//         id: 4,
//         name: "JavaScript",
//         NoOfArticles: "256 Articles this week",
//       },
//       {
//         id: 5,
//         name: "JavaScript",
//         NoOfArticles: "256 Articles this week",
//       },
//       {
//         id: 6,
//         name: "JavaScript",
//         NoOfArticles: "256 Articles this week",
//       },
//     ];

//     // res.status(200).json({  trendingTags });
//   }

