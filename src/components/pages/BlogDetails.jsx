import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AiFillEdit } from "react-icons/ai";
import { toast } from 'react-toastify';

const BlogDetails = () => {
    const [comment, setComment] = useState("")
    const [commentData, setCommentData] = useState([])
    const { id } = useParams();
    const history = useHistory();

    // Blog View
    const blogPosts = useSelector(state => state.BlogReducers.postsData)
    const SingleBlog = blogPosts.find(val => val.id === parseInt(id));

    // Related Posts
    const RelatedBlogs = useSelector(state => state.BlogReducers.postsData.slice(0, 3))

    const handleComment = (event) => {
        event.preventDefault();
        if (comment.length > 3) {
            setCommentData((preVal) => {
                return [
                    ...preVal,
                    comment
                ]
            })
            setComment("")
        } else {
            toast.warning("Min 4 charcters are allowed")
        }

    }

    const commentDate = new Date().toLocaleDateString();
    const commentTime = new Date().toLocaleTimeString();

    return (
        <>
            {
                SingleBlog ?
                    <div className="bg-gray-50">
                        <div className=" md:px-10 py-6 mx-auto">
                            {/*author*/}
                            <div className="min-w-6xl px-4 md:px-10 py-6 mx-auto bg-gray-50">
                                <div className="relative">
                                    <NavLink to={`/blogs/edit/${id}`}>
                                        <div className="absolute top-0 left-0 bg-blue-600 px-3 py-2 cursor-pointer rounded">
                                            <AiFillEdit className="text-white text-2xl" />
                                        </div>
                                    </NavLink>
                                    <img className="object-cover w-full shadow-sm h-full rounded" src={`https://source.unsplash.com/collection/${id}/1600x900`} />
                                </div>
                                {/*post categories*/}
                                <div className="flex items-center justify-start mt-4 mb-4">
                                    <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">Django</a>
                                    <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">Python</a>
                                    <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500">web development</a>
                                </div>
                                <div className="mt-2">
                                    {/*post heading*/}
                                    <h1 className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-800 capitalize hover:underline cursor-pointer">{SingleBlog.title}</h1>
                                    {/*post views*/}
                                    <div className="flex justify-start items-center mt-2">
                                        <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">3000</p>
                                        <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
                                    </div>
                                    {/*author avator*/}
                                    <div className="font-light text-gray-600">
                                        <a href="#" className="flex items-center mt-6 mb-6"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                                            <h1 className="font-bold text-gray-700 hover:underline">By James Amos</h1>
                                        </a>
                                    </div>
                                </div>
                                {/*end post header*/}
                                {/*post content*/}
                                <div className="max-w-4xl md:px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
                                    {/*content body*/}
                                    <div>
                                        <p className="md:mt-2 p-3 md:p-8">{SingleBlog.body}</p>
                                    </div>
                                </div>
                            </div>
                            {/*related posts*/}
                            <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">Related Posts</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-6 mt-10">
                                {
                                    RelatedBlogs.map((blog) => {
                                        return (<>
                                            <div className="shadow-sm rounded-xl ">
                                                <NavLink exact to={`/blogs/blogs/${blog.id}`} className="block transition duration-200 ease-out transform overflow-hidden w-full hover:scale-110">
                                                    <img className="object-cover w-full shadow-sm h-full rounded-t-lg" src={`https://source.unsplash.com/collection/${blog.id}/1600x900`} />
                                                </NavLink>
                                                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                                    <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                                        <span>Flask</span>
                                                    </div>
                                                    <NavLink exact to={`/blogs/blogs/${blog.id}`}><h2 className="w-full text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="#_">{blog.title}</a></h2></NavLink>
                                                    {/* <p class="mt-2 text-sm text-gray-500">Learn how to authenticate users to your application using facebook.</p> */}
                                                </div>
                                            </div>
                                        </>)
                                    })
                                }
                            </div>
                            {/*form form comments*/}
                            <div className="max-w-4xl md:py-16 xl:px-8 flex justify-center mx-auto">
                                <div className="w-full mt-16 md:mt-0 ">
                                    <form className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                                        <h3 className="mb-6 text-2xl font-medium text-center">Write a comment</h3>
                                        <textarea type="text" name="comment" className="w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Write your comment" rows={5} cols={33} value={comment} onChange={(event) => setComment(event.target.value)} />
                                        <input type="submit" defaultValue="Submit comment" name="submit" className=" text-white px-4 py-3 bg-blue-500 cursor-pointer rounded-lg" onClick={handleComment} />
                                    </form>
                                </div>
                            </div>
                            {/*comments*/}
                            <div className="max-w-4xl py-16 mx-auto bg-gray-100 min-w-screen animation-fade animation-delay px-8 mx-auto sm:px-12 xl:px-5">
                                <p className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-3xl lg:text-4xl sm:text-center">
                                    All comments on this post
                                </p>
                                {/*comment 1*/}
                                <div className="flex items-start w-full px-2 md:px-4 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 gap-3">
                                    <a href="#" className="flex mb-6 mr-6"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                                    </a>
                                    <div><h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">By James Amos</h3>
                                        <p className="text-sm font-bold text-gray-300">August 21,2021</p>
                                        <p className="mt-2 pr-4 text-base text-gray-600 sm:text-lg md:text-normal text-justify">
                                            Please help with how you did the migrations for the blog database fields.I tried mine using exactly what you instructed but its not working!!.
                                        </p>

                                    </div>
                                </div>
                                {/*comment 2*/}
                                <div className="flex items-start w-full px-2 md:px-4 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 gap-3">
                                    <a href="#" className="flex mb-6 mr-6"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                                    </a>
                                    <div><h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">By James Amos</h3>
                                        <p className="text-sm font-bold text-gray-300">August 22,2021</p>
                                        <p className="mt-2 pr-4 text-base text-gray-600 sm:text-lg md:text-normal text-justify">
                                            Especially I dont understand the concepts of multiple models.What really is the difference between the blog model and blogApp model? Am stuck

                                        </p>
                                    </div>
                                </div>
                                {
                                    commentData.map((coment) => {
                                        return (<>
                                            <div className="flex items-start w-full px-2 md:px-4 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 gap-3">
                                                <a href="#" className="flex mb-6 mr-6"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                                                </a>
                                                <div><h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">By Admin</h3>
                                                    <p className="text-sm font-bold text-gray-300">{commentDate} {commentTime}</p>
                                                    <p className="mt-2 pr-4 text-base text-gray-600 sm:text-lg md:text-normal text-justify">
                                                        {coment}
                                                    </p>
                                                </div>
                                            </div>
                                        </>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <p>Loading...</p>
            }


        </>
    )
}

export default BlogDetails
