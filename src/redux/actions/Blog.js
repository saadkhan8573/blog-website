export const getBlogs = (data) => {
    return{
        type : "GET_BLOGS",
        payload : data
    }
}

export const addBlog = (data) => {
    console.log("Data",data)
    return{
        type : "ADD_BLOG",
        payload : data
    }
}

export const updateBlog = (data) => {
    return{
        type : "UPDATE_DATA",
        payload : data
    }
}

export const deleteBlog = (id) => {
    return{
        type : "DELETE_BLOG",
        payload : id
    }
}