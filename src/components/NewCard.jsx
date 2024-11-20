import * as React from 'react';







export default function NewCard({post}) {
  return (
    
    <div className='min-w-64 h-auto  border border-black drop-shadow-md rounded-md '>
    <div className='w-auto'><img className='w-48 p-2  max-h-40' src={post.image} alt="logo" /></div>
      <div>
        <h3 className='title '>{post.title}</h3>
        <p>{post.details}</p>
      </div>
      
    </div>
      
  );
}
