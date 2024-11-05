// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//services
import * as blogService from '../../services/blogService' 

// components
import AuthorCard from '../../components/AuthorCard/AuthorCard'
import NewComment from '../../components/NewComment/NewComment'

// css
import styles from './BlogDetails.module.css'

const BlogDetails = ({ user, handleDeleteBlog }) => {
  const {blogId} = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(()=>{
    const fetchBlog = async () => {
      const data = await blogService.showBlog(blogId)
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
      <div className={styles.blog_container}>
        <div className={styles.blog_header}>
          <div className={styles.blog_title}>{blog.title}

            {user?.profile === blog.author._id &&
            <button onClick={()=> handleDeleteBlog(blogId)} className={styles.delete_button}>Delete post</button> }
          </div>
          <div className={styles.publishDate}> {formatDate(blog.createdAt)}</div>
        </div>      
        <div className={styles.blog_content}> {blog.content}</div>
        <AuthorCard key={blog.author._id} author={blog.author}/>
      </div>
      <div className={styles.commment_container}>
        {blog.comments.length > 0 ? 'hello': 'No Comments'}
        {user && 
          <button>
            Leave a Comment
          </button> }
          <NewComment/>
      </div>

    </main>
  );
}

export default BlogDetails;