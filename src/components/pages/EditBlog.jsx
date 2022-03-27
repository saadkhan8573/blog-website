import React from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { updateBlog } from '../../redux/actions/Blog'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const EditBlog = () => {
    const [postData, setPostData] = useState({
        title: "",
        body: ""
    })
    const history = useHistory()
    const { id } = useParams();

    const blogPosts = useSelector(state => state.BlogReducers.postsData)
    const SingleBlog = blogPosts.find(val => val.id === parseInt(id));
    console.log("SingleBlog", SingleBlog)

    useEffect(() => {
        setPostData(SingleBlog)
    }, [blogPosts])

    const dispatch = useDispatch()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPostData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const handleSubmit = async () => {
        dispatch(updateBlog(postData))
        history.push("/blogs")
    }
    return (
        <>
            {
                SingleBlog ?
                    <div className="flex items-center" style={{
                        backgroundImage: `url("https://images.unsplash.com/23/parked-bike.JPG")`
                    }}>

                        <div className="container mx-auto shadow-md hover:shadow-lg transition duration-300">
                            <div className="py-12 p-10 bg-white rounded-xl">
                                <div className="mb-6">
                                    <label className="mr-4 text-gray-700 font-bold inline-block mb-2 w-full" htmlFor="name">Name</label>
                                    <input type="text" className="border bg-gray-100 py-2 px-4 outline-none w-full focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your name" name="title" value={postData.title} onChange={handleChange} />
                                </div>
                                <div className>
                                    <label className="mr-4 text-gray-700 font-bold inline-block mb-2 w-full" htmlFor="name">Content</label>
                                    <textarea rows="18" className="border bg-gray-100 py-2 px-4 outline-none w-full focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Add Your Content Here" name="body" value={postData.body} onChange={handleChange} />
                                </div>
                                <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300" onClick={handleSubmit}>UPDATE</button>
                            </div>
                        </div>
                    </div>
                    :
                    <p>Loading...</p>
            }
        </>
    )
}

export default EditBlog