'use client'
// import { blog_data } from '@/Assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import logo from '../../../Assets/logo.png'
import facebook from '../../../Assets/facebook_icon.png'
import twitter from '../../../Assets/twitter_icon.png'
import google from '../../../Assets/googleplus_icon.png'
import Footer from '@/Components/Footer';
import Link from 'next/link';
import axios from 'axios';

const page = ({ params }) => {

    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog',{
            params:{
                id:params.id
            }
        })
        setData(response.data);
    }

    useEffect(() => {
        fetchBlogData();
    }, [])

    return (data?<>
        <div className='bg-gray-200 px-5 py-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center '>
                <Link href="/">
                    <Image src={logo} alt='logo' />
                </Link>
                <button className='hover:text-indigo-500 cursor-pointer border border-solid border-black items-center py-1 px-3 font-medium sm:py-3 sm:px-3 shadow-[-7px_7px_0px_#000] '>Get Started</button>
            </div>
            <div className='text-center my-24'>
                <h1 className='text-2xl text-black font-semibold sm:text-5xl w-[700px] mx-auto'>{data.title}</h1>
                <Image className='mt-5 mx-auto border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='auther-image' />
                <p className='mt-1 pb-2 text-lg w-[700px] mx-auto font-medium '>{data.author}</p>
            </div>
        </div>
        <div className='mx-5 w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='' />
            <div className='blog-content text-justify' dangerouslySetInnerHTML={{__html:data.description}}></div>
            <div className='my-24'>
                <p className='my-4 text-black font-semibold '>Share this article on social media</p>
                <div className='flex'>
                    <Image src={facebook} alt='social-icon' className=' cursor-pointer w-10 h-10 ' />
                    <Image src={twitter} alt='social-icon' className=' cursor-pointer w-10 h-10 ' />
                    <Image src={google} alt='social-icon' className=' cursor-pointer w-10 h-10 ' />
                </div>
            </div>
        </div>
        <Footer/>
        </>:<></>
        
    )
}

export default page
