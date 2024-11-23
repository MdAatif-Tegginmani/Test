import * as React from 'react';
import { Link } from "react-router-dom"
import { MdOutlineEdit } from "react-icons/md";








export default function NewCard({ post }) {
  return (

    <div className='min-w-64 h-auto  border border-black drop-shadow-md rounded-md '>
      <div className=''><img className='w-full p-6 ' src='blog.jpg' alt="logo" />
      </div>
      <div className='m-auto'>
        <h3 className='text-center	'>{post.title}</h3>
        <p className='text-left text-wrap w-auto p-4'>{post.details}</p>

      </div>
      <div className='m-auto p-4 '>
        <Link to={'/' + post.id}>
          <MdOutlineEdit className='border  border-slate-900 rounded-md ' />
        </Link>
      </div>

    </div>

  );
}
