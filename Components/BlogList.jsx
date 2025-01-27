// app/Components/BlogList.jsx
"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import BlogItem from './BlogItem'
// import { blog_data } from '@/Assets/assets'

const BlogList = () => {

    const [Menu, setMenu] = useState("All");

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/blog');
            setBlogs(response.data.blogs); 
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);
  
    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu('All')} className={Menu === "All" ? 'text-white bg-black py-1 px-4 rounded-sm' : ""}>All</button>
                <button onClick={() => setMenu('Technology')} className={Menu === "Technology" ? 'text-white bg-black py-1 px-4 rounded-sm' : ""}>Technology</button>
                <button onClick={() => setMenu('Startup')} className={Menu === "Startup" ? 'text-white bg-black py-1 px-4 rounded-sm' : ""}>Startup</button>
                <button onClick={() => setMenu('Lifestyle')} className={Menu === "Lifestyle" ? 'text-white bg-black py-1 px-4 rounded-sm' : ""}>Lifestyle</button>
            </div>
            <div className="flex flex-wrap justify-around gap-3 mb-16 sm:mx-5 md:mx-10 xl:mx-24">
                {blogs.filter((item) => Menu === "All" ? true : item.category === Menu).map((item, index) => (
                    <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
                ))}
            </div>
        </div>
    )
}

export default BlogList
