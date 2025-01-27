'use client'
import Image from 'next/image'
import React from 'react'
import arrow from '../Assets/arrow.png'
import Link from 'next/link'

const BlogItem = ({ title, description, category, image, id }) => {
    return (
        <div className="w-[90%] md:w-[48%] lg:w-[24%] bg-gray-300 p-1 cursor-pointer border mb-5 border-black hover:shadow-[-7px_7px_10px_2px_#000] ">
            <Link href={`/blogs/${id}`}>
                <Image src={image} alt="image-preview" width={400} height={400} className="border-b border-black " />
            </Link>
            <div className='p-2 mt-3'>
                <h3 className="text-xs tracking-widest title-font mb-1 text-white p-1 bg-black w-fit">{category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{title.slice(0,50)}...</h2>
                <p className="mt-1 text-sm tracking-tight text-gray-700" dangerouslySetInnerHTML={{__html:description.slice(0,120)}}></p>
                <Link href={`/blogs/${id}`} className='flex items-center mt-3 py-2 font-semibold gap-2'>
                    Read More <Image src={arrow} alt='arrow' className=' w-[12px] ml-1' />
                </Link>
            </div>
        </div>
    )
}

export default BlogItem
