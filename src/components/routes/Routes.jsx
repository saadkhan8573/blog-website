import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddBlog from '../pages/AddBlog'
import BlogDetails from '../pages/BlogDetails'
import BlogPage from '../pages/BlogPage'
import EditBlog from '../pages/EditBlog'

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/blogs" component={BlogPage} />
                <Route exact path="/blogs/blogs/:id" component={BlogDetails} />
                <Route exact path="/blogs/add-blog" component={AddBlog} />
                <Route exact path="/blogs/edit/:id" component={EditBlog} />
            </Switch>
        </>
    )
}

export default Routes
