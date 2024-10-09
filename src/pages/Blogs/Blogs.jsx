// npm modules
import { useState, useEffect } from 'react';
// css
import styles from './Blogs.module.css'

const Blogs = ({ user }) => {
  const [blogs, setBlog] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {

      setBlog()
    }
    fetchBlogs()
  }, [])

  return (  
    <main className={styles.main_container}>
      <div className={styles.blog_container}>
        <h1>Blog</h1>
        <div className={styles.recent_blog}></div>
        {blogs?.map(blog =>(
          blog.title
        ) )}
      </div>
    </main>
  );
}



export default Blogs;