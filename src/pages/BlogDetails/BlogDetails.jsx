// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//services
import * as blogServices from '../../services/blogService' 

// css
import styles from './BlogDetails.module.css'

const BlogDetails = () => {
  const {blogId} = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(()=>{

    const fetchBlog = async () => {
      const data = await blogServices.showBlog(blogId)
      setBlog(data)
    }
    fetchBlog()
  },[blogId])

  return (  
    <main className={styles.main_container}>
      <h1>{blog?.title}</h1>
    </main>
  );
}

export default BlogDetails;