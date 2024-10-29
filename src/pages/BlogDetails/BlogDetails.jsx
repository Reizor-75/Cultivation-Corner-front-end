// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//services
import * as blogServices from '../../services/blogService' 

// components
import MemberCard from '../../components/MemberCard/MemberCard'

// css
import styles from './BlogDetails.module.css'

const BlogDetails = ({user}) => {
  const {blogId} = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(()=>{

    const fetchBlog = async () => {
      const data = await blogServices.showBlog(blogId)
      setBlog(data)
    }
    fetchBlog()
  },[blogId])


  const formatDate = (date) => { return new Date(date).toDateString()}

  if(!blog)
    return(<main className={styles.main_container}>
      <h1>Content is Missing</h1>
    </main>
    )

  return (  
    <main className={styles.main_container}>
      <div className={styles.blog_header}>{blog.title}
      </div>
      <div>{blog.author.name}</div>
      <div>{formatDate(blog.createdAt)}</div>
      <div>{blog.content}</div>
      <MemberCard key={blog.author._id} user={user}member={blog.author}/>
    </main>
  );
}

export default BlogDetails;