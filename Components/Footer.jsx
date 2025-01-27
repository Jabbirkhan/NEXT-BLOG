import Image from 'next/image'
import React from 'react'
import logo from '../Assets/logo_light.png'
import facebook from '../Assets/facebook_icon.png'
import twitter from '../Assets/twitter_icon.png'
import google from '../Assets/googleplus_icon.png'

const Footer = () => {
    return (
        <footer className="text-white bg-black">
            <div className="container flex items-center justify-between gap-y-5 px-5 py-8 mx-auto sm:flex-row flex-col">
                <div>
                    <Image src={logo} alt='logo-light' width={100} />
                </div>
                <div>
                    <p>All right reserved. Copyright@Blogger</p>
                </div>
                <div className="inline-flex">
                    <Image src={facebook} alt='social-icon' className=' cursor-pointer w-10 h-10 ' />
                    <Image src={twitter} alt='social-icon' className=' cursor-pointer w-10 h-10 ' />
                    <Image src={google} alt='social-icon' className=' cursor-pointer w-10 h-10 ' />
                </div>
            </div>
        </footer>
    )
}

export default Footer
