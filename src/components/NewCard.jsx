import * as React from 'react';







export default function NewCard({post}) {
  return (
    
    <div className='min-w-64 h-auto  border border-black drop-shadow-md rounded-md '>
    <div className=''><img className='w-full p-6 ' src='blog.jpg'  alt="logo" />
    </div>
      <div className='m-auto'>
        <h3 className='text-center	'>{post.title}</h3>
        <p className='text-left   p-4'>{post.details}</p>
      </div>
      
    </div>
      
  );
}
