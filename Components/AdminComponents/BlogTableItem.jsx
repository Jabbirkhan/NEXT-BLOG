// app/Components/AdminComponents/BlogTableItem.jsx
import React from 'react'
import Image from 'next/image'
import profile from '../../Assets/profile_icon.png'

const BlogTableItem = ({authorImg, title, author, date, deleteBlog, mongoId}) => {
    const blogDate = new Date(date);
  return (
    <tr className='bg-white border-b'>
      <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        <Image src={authorImg?authorImg:profile} width={40} height={40} alt='author-image' />
        <p>{author?author:"No author"}</p>
      </th>
      <td className='px-6 py-4 items-center'>
        {title?title.slice(0,50):"no title"}
      </td>
      <td className='px-6 py-4 items-center'>
        {blogDate.toDateString()}
      </td>
      <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer text-xl items-center'>
        x
      </td>
    </tr>
  )
}

export default BlogTableItem
