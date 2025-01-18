import React, { useEffect, useState } from 'react'
import './blog.css'
import axios from 'axios'
const Blog = () => {
    const [blogData,setBlogData]=useState([])
    
    const fetchBlogs=async()=>{
        try {
            const response=await axios.get('https://sonicadminbackend.vercel.app/api/getblog')
            setBlogData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    console.log('getting data ',blogData)
    useEffect(()=>{
        fetchBlogs()
    },[])
    return (
        <div className='blog-section'>
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <div class="card-blog">
                        <p class="">
                            @google/generative-ai integration
                        </p>
                        <p>
                            Excited to integrate @google/generative-ai into my React and Node.js app! 🎉 This enhances user experiences, boosts automation, and sparks innovation. Big thanks to Google for this amazing tool! 🙌 Let's embrace the future of AI together! 🚀
                        </p>
                        <p>
                            DT: 02-07-24
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
