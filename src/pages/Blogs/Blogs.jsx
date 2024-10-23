// npm modules
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// service
import * as blogService from '../../services/blogService'

// componenets
import BlogCard from '../../components/BlogCard/BlogCard';
// css
import styles from './Blogs.module.css'

const Blogs = ({ user }) => {
  const [blogs, setBlog] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsData = await blogService.getAllBlogs()
      setBlog(blogsData)
    }
    fetchBlogs()
  }, [])

  console.log(blogs)
  return (  
    <main className={styles.main_container}>
      <h1>Blog</h1>
      { user?.role >= 500 && 
        <NavLink to="/blogs/newBlog"> <button>New Blog Post</button> </NavLink>
      }
      <div className={styles.recent_blog}></div>
      <div className={styles.blog_container}>
        { !blogs ? 
          "No Blogs Available"
        :
          blogs.map(blog =>(
            <BlogCard key={blog._id} blog={blog}/>
          ))
        }
      </div>
    </main>
  );
}



export default Blogs;