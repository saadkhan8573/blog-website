import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import BlogCard from './BlogCard';
import ReactPaginate from 'react-paginate';
import axios from 'axios'

const BlogPage = () => {
    const blogPosts = useSelector(state => state.BlogReducers.postsData.slice(0, 15))
    const [pageNumber, setPageNumber] = useState(0);
    const [userPerPage, setUserPerPage] = useState(9);
    const [inputFile, setinputFile] = useState()
    const [isFilePicked, setIsFilePicked] = useState(false);

    const pageVisited = pageNumber * userPerPage;

    const displayUsers = blogPosts.slice(pageVisited, pageVisited + userPerPage).map((val) => {
        return (<>
            <BlogCard
                blogPosts={val}
            />
        </>)
    })

    const pageCount = Math.ceil(blogPosts.length / userPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    const upoadFile = (event) => {
        setinputFile(event.target.files[0])
    }
    console.log(inputFile)
    const handleSubmit = async () => {
        const fd = new FormData();
        fd.append('inputFile', inputFile)
        const newData = await axios.post("http://localhost:3000/comments/", inputFile)
        console.log(newData)
        setIsFilePicked(newData)
        
    }
    console.log(isFilePicked)
    return (
        <>
            <input type="file" onChange={upoadFile} />
            <button type="submit" onClick={handleSubmit}>Click Me</button>
            {displayUsers.length ?
                <>
                    <div>
                        <h1 className="text-2xl font-bold text-center my-6">All Data comming from Dummy Api and images comming from Unsplash</h1>
                    </div>
                    <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5">
                        {displayUsers}
                    </div>
                    <div className="my-16">
                        <ReactPaginate
                            previousLabel={"Prev"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"flex justify-center items-center gap-5 text-blue-700"}
                            previousLinkClassName={"border-2 border-blue-600 rounded px-3 py-1 flex items-center cursor-pointer"}
                            nextLinkClassName={"border-2 border-blue-600 rounded px-3 py-1 flex items-center cursor-pointer"}
                            disabledClassName={"a"}
                            activeClassName={"border-2 border-blue-600 bg-blue-700 text-white rounded px-4 py-1 cursor-pointer flex items-center"}

                        />
                    </div>
                </>
                :
                <div className="flex justify-center items-center w-full h-96">
                    <h1 className="text-2xl font-bold text-center">No Post Were Found! <br /> Plzz Click Add Blog Button to Add a new Post  </h1>
                </div>
            }

        </>
    )
}

export default BlogPage
