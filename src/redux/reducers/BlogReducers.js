const initialState = {
    postsData: []
}

const BlogReducers = (state = initialState, action) => {

    switch (action.type) {
        case "GET_BLOGS":
            return {
                postsData: action.payload
            }

        case "ADD_BLOG":
            console.log(action.payload);
            return {
                postsData: [
                    action.payload,
                    ...state.postsData
                ]
            }

        case "UPDATE_DATA":
            const updatedBlog = state.postsData.map(blog => blog.id === action.payload.id ? action.payload : blog);
            console.log(updatedBlog);
            return {
                postsData: updatedBlog
            }

        case "DELETE_BLOG":
            const updatedBlogs = state.postsData.filter(val => val.id !== action.payload);
            return {
                postsData: updatedBlogs
            }

        default: return state;
    }
}

export default BlogReducers;