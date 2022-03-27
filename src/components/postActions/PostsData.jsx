import React, { useEffect } from 'react'
import { getBlogs } from '../../redux/actions/Blog'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const PostsData = () => {

    useEffect(() => {
        getBlogsData()
    }, [])

    const dispatch = useDispatch();
    const getBlogsData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch(getBlogs(response.data.reverse()))
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
        </>
    )
}

export default PostsData