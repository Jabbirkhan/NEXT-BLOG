import Image from 'next/image'
import React from 'react'
import logo from '../../Assets/logo.png'
import add from '../../Assets/add_icon.png'
import blog from '../../Assets/blog_icon.png'
import email from '../../Assets/email_icon.png'
import Link from 'next/link'

const sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <Image src={logo} width={120} alt='logo' />
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black '>

                <div className='flex flex-col w-[50%] sm:w-[80%] absolute right-0 gap-y-5'>
                    <Link href="/admin/addProduct" className='flex items-center boreder border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_10px_2px_#000] cursor-pointer '>
                        <Image src={add} width={28} alt='' /> <p>Add Blogs</p>
                    </Link>
                    <Link href="/admin/blogList" className='flex items-center boreder border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_10px_2px_#000] cursor-pointer '>
                        <Image src={blog} width={28} alt='' /> <p>Blog Lists</p>
                    </Link>
                    <Link href="/admin/subscriptions" className='flex items-center boreder border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_10px_2px_#000] cursor-pointer '>
                        <Image src={email} width={28} alt='' /> <p>Subscriptions</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default sidebar
