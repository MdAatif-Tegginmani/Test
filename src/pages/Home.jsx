import React, { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import Navbar from '../components/Navbar'
import List from '../components/List'
import Sidebar from '../components/Sidebar'


const Home = () => {

  const [fetchError, setFetchErrors] = useState(null)
  const [posts, setPosts] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [orderBy, setOrderBy] = useState('created at');




  const handleDelete = (id) => {
    setPosts(prevPosts => {
      return prevPosts.filter(sm => sm.id !== id)
    })
  }



  useEffect(() => {

    const handleData = async () => {

      const { data, error } = await supabase
      .from('Posts')
      .select()
      // .order(orderBy, { ascending: false })

      if (error) {
        setFetchErrors("Could not fetch the data")
        setPosts(null)
      }
      if (data) {
        setPosts(data)
        setFetchErrors(null)

      }

    }

    handleData()
  }, [orderBy])


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar state
  };


  return (
    <div className='flex flex-col h-screen '>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className='flex flex-1'>
        <div
          className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >

          <Sidebar />


        </div>


        <div className="flex-1 p-4 overflow-auto">

          <div className='order-them flex justify-around '>
            <p>Sort</p>
            <button className='border border-black p-2' onClick={() => setOrderBy('created at')}>Time created</button>
            <button className='border border-black p-2' onClick={() => setOrderBy('title')}>Title</button>

            {orderBy}
            {    // <button onClick={()=> setOrderBy('')}>Time createdx</button>
            }

          </div>

          <List error={fetchError}   onDelete={handleDelete} posts={posts} />
        </div>
      </div>

    </div>
  )
}

export default Home
