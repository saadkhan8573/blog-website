import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deleteBlog } from '../../redux/actions/Blog';
import { useDispatch } from 'react-redux';

const BlogCard = (props) => {
    const { blogPosts } = props;
    const dispatch = useDispatch();

    const turcateTitle = (string, num) => {
        return string.length > num ? `${string.substr(0, num - 1)} .....` : string
    }

    const turncateBody = (string, num) => {
        return string.length > num ? `${string.substr(0, num - 1)} .....` : string
    }
    const abcde = () => {
        window.open(`/blogs/blogs/${blogPosts.id}`)
    }
    return (
        <>
            <div className="relative grid-cols-3 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-200">
                <NavLink to={`/blogs/edit/${blogPosts.id}`}>
                    <div className="absolute top-0 left-0 bg-blue-600 px-3 py-2 cursor-pointer rounded">
                        <AiFillEdit className="text-white text-2xl" />
                    </div>
                </NavLink>
                <div className="absolute top-0 right-0 bg-red-600 px-3 py-2 cursor-pointer rounded" onClick={() => dispatch(deleteBlog(blogPosts.id))}>
                    <AiFillDelete className="text-white text-2xl" />
                </div>
                <NavLink exact to={`/blogs/blogs/${blogPosts.id}`}><img className="rounded-t-lg" src={`https://source.unsplash.com/collection/${blogPosts.id}/1600x900`} alt={blogPosts.title} /></NavLink>
                <div className="py-4 px-8">
                    <NavLink exact to={`/blogs/blogs/${blogPosts.id}`}><h1 className="mt-2 text-gray-900 font-bold text-2xl uppercase hover:text-gray-600">{turcateTitle(`${blogPosts.title}`, 25)}</h1></NavLink>
                    <p className="py-3 text-gray-600 leading-6">{turncateBody(`${blogPosts.body}`, 120)}</p>
                    <h1 onClick={() => abcde(blogPosts.id)} className="text-sm	cursor-pointer text-blue-600 uppercase hover:text-blue-900">Read More...</h1>
                </div>
            </div>


        </>
    )
}

export default BlogCard
