import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addBlog } from '../../redux/actions/Blog'
import { useDispatch, useSelector } from 'react-redux'

const AddBlog = () => {
    const [postData, setPostData] = useState({
        title: "",
        body: ""
    })
    const history = useHistory()
    const blogPosts = useSelector(state => state.BlogReducers.postsData)
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
        const { title, body } = postData;
        const updatedPostData = {
            id: blogPosts.length + 1,
            title: postData.title,
            body: postData.body
        }
        dispatch(addBlog(updatedPostData))
        console.log("KJSDBVHDSBVJDS", postData)
        history.push("/blogs")
        // try {
        //     const response = await axios.post("http://localhost:3000/posts", { title, body })
        //     setTimeout(() => {
        //     }, 1000);
        //     console.log(response.data)
        // }
        // catch (err) {
        //     console.log(err)
        // }
    }
    return (
        <>
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
                        <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300" onClick={handleSubmit}>PUBLISH</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBlog
