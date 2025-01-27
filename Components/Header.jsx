'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import { toast } from 'react-toastify'
import axios from 'axios'

const Header = () => {

    const [email, setEmail] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('email', email);
    
        try {
            const response = await axios.post('/api/email', formData);
    
            if (response.data.success) {
                toast.success(response.data.msg);
                setEmail("");
            } else {
                toast.error(response.data.msg);
            }
        } catch (error) {
            toast.error("Error subscribing to email");
            console.error("Error in onSubmitHandler:", error);
        }
    }
    

    return (
        <div className='py-5 px-5 md:px-12 lg:px-28 '>

            <div className='flex justify-between items-center '>
                <Image src={logo} alt='logo' />
                <button className='hover:text-indigo-500 cursor-pointer border border-solid border-black items-center py-1 px-3 font-medium sm:py-3 sm:px-3 shadow-[-7px_7px_0px_#000] '>Get Started</button>
            </div>

            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-semibold'>Latext Blogs</h1>
                <p className='text-xs sm:text-base text-slate-400 mt-10 max-w-[740px] mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iste hic, a soluta in fuga. consectetur adipisicing elit. Minus iste hic, a soluta in fuga.</p>
                <form onSubmit={onSubmitHandler} className='flex justify-between mt-10 w-[500px] mx-auto scale-75 sm:scale-100 border-[2px] border-solid border-black shadow-[-7px_7px_0px_#000]'>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none w-[400px]' />
                    <button className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white border-l'>Subscribe</button>
                </form>
            </div>

        </div>
    )
}

export default Header
