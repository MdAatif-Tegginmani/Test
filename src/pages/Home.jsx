import React, { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import Navbar from '../components/Navbar'
import List from '../components/List'
import Sidebar from '../components/Sidebar'


const Home = () => {

  const [fetchError, setFetchErrors] = useState(null)
  const [posts, setPosts] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility



  useEffect(() => {

    const handleData = async () => {

      const { data, error } = await supabase.from('Posts').select()

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
  }, [])

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
            <List error={fetchError} posts={posts} />
          </div>
        </div>

      </div>
      )
}

      export default Home
