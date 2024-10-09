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

  if(!blogs){
    return <h1>Loading...</h1>
  }

  return (  
    <main className={styles.main_container}>
      <div className={styles.blog_container}>
        <h1>Blog</h1>
        <div className={styles.recent_blog}></div>
        {blogs.map(blog =>(
          blog.title
        ) )}
      </div>
    </main>
  );
}



export default Blogs;