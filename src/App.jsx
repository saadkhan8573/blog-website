import React from 'react'
import Navbar from './components/navbar/Navbar'
import BlogPage from './components/pages/BlogPage';
import PostActions from './components/postActions/PostsData';
import Routes from './components/routes/Routes'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <Navbar/>
            <ToastContainer position="top-center"/>
            <PostActions/>
            <Routes/>
        </>
    )
}

export default App