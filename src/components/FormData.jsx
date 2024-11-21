import React, { useState } from 'react'
import supabase from '../config/supabaseClient.js'

const FormData = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = async (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);





    const { data, error } = await supabase.from('Posts').insert([{
      title: formData.title,
      details: formData.details,
      image: formData.image,

    }])

    if (error) {
      console.error("Error inserting post:", error.message);
    } else {
      console.log("Post inserted successfully:", data);
    }







    setFormData({ title: "", details: "", image: null });
    setLoading(false)
    setShowModal(false);
  };








  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center">


      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add New Post</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
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
                  value={formData.details}
                  onChange={handleInputChange}
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
                  onChange={handleImageChange}
                  className="w-full mt-1"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                  disabled={loading}

                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  {loading ? "Submitting..." : "Submit"}

                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

}

export default FormData