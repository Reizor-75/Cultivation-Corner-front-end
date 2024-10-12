// npm modules
import { useState, useEffect } from 'react';

// service
import * as blogService from '../../services/blogService'

// css
import styles from './Blogs.module.css'

const Blogs = ({ user }) => {
  const [blogs, setBlog] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsData = await blogService.getAllProducts()
      setBlog(blogsData)
    }
    fetchBlogs()
  }, [])

  return (  
    <main className={styles.main_container}>
      <h1>Blog</h1>
      <button>New Blog Post</button>
      <div className={styles.recent_blog}></div>
      <div className={styles.blog_container}>
        { blogs ? 
          "No Blogs Available"
        :
          blogs.map(blog =>(
            blog.title
          ))
        }
      </div>
    </main>
  );
}



export default Blogs;