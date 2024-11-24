import React from 'react'
import { replace, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import supabase from '../config/supabaseClient'

const Update = () => {
    const { id } = useParams()
    const navigate = useNavigate()


    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')


    const handleSubmit = async (e) =>{
        e.preventDefault()

        const {data ,error} = await supabase
        .from('Posts')
        .update({title,details})
        .eq('id',id)

    }


    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select()
                .eq('id', id)
                .single()


            if (error) {
                navigate('/', { replace: true })
            }

            if (data) {
                setTitle(data.title)
                setDetails(data.details)
                console.log(data)
            }
        }
        fetchPosts()
    }, [id, navigate])



    return (
        <div className=" bg-gray-100 flex flex-col items-center justify-center">
        
        
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    required
                    />
                    </div>

            <div className="mb-4">
                <label htmlFor="details" className="block text-sm font-medium">
                Details
                </label>
                <textarea
                id="details"
                    name="details"
                    value={details}
                    onChange={(e)=> setDetails(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    required
                    ></textarea>
                    </div>

                    <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium">
                    Upload Image
                    </label>
                    <input
                    type="file"
                    id="image"
                    name="image"
                    
                    className="w-full mt-1"
                    />
                    </div>
                    
                    <div className="flex justify-end">
                    <button
                    type="button"
                   
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                    

                >
                    Cancel
                    </button>
                <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                
                Update the posts
                </button>
                </div>
                </form>
                </div>
            )
}

export default Update