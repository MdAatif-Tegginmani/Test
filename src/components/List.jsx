import React from 'react'
import NewCard from './NewCard'
import FormData from './FormData'

const List = ({posts, fetchError }) => {
  return (
    <div className='flex mt-20  gap-4 '>
    {fetchError && (<p>{fetchError}</p>)}
    { posts ? (
      posts.map((post , index)=>(
        <NewCard key={index} post = {post} />
        
      ))
    ):(
      <p>Loading...</p>
    )}
    
    <span className="sm:ml-3">
    <button
      type="button"
      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
    Add 
    
    </button>
    </span>
    <FormData/>
    </div>
  )
}

export default List