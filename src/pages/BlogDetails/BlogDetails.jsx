// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//services
import * as blogService from '../../services/blogService' 

// components
import AuthorCard from '../../components/AuthorCard/AuthorCard'
import NewComment from '../../components/NewComment/NewComment'
import CommentCard from '../../components/CommentCard/CommentCard'
import MiniProductCard from '../../components/MiniProductCard/MiniProductCard'

// css
import styles from './BlogDetails.module.css'

const BlogDetails = ({ user, handleDeleteBlog }) => {
  const {blogId} = useParams()
  const [blog, setBlog] = useState(null)
  const [showAdd, setShowAdd] = useState(false)

  useEffect(()=>{
    const fetchBlog = async () => {
      const data = await blogService.showBlog(blogId)
      setBlog(data)
    }
    fetchBlog()
  },[blogId])

  const handleAddComment = async(formData) => {
    const newComment = await blogService.createComment(blog._id, formData)
    setBlog({ ...blog, comments: [...blog.comments, newComment] })
  }

  const handleDeleteComment = async (commentId) => {
    await blogService.deleteComment(blog._id, commentId)
    setBlog({...blog, comments: blog.comments.filter((comment) => comment._id !== commentId)})
  }

  const toggleAddComment = () =>{
    setShowAdd(!showAdd)
  }

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
          <div className={styles.blog_title}>
            {blog.title}
            {user?.profile === blog.author._id &&
              <div className={styles.user_buttons}>
                <div className= {styles.edit_button}><i className="fa-solid fa-pen-to-square"></i></div> 
                <div className={styles.delete_button} onClick={()=> handleDeleteBlog(blogId)}><i className="fa-solid fa-eraser"></i></div> 
              </div>
            }
          </div>
          <div className={styles.publishDate}> {formatDate(blog.createdAt)}</div>
        </div>      
        <div className={styles.blog_content}> 
          {blog.content}</div>
          
        <AuthorCard key={blog.author_id} author={blog.author}/>
        
        <h2>Feature Products</h2>
        <div className={styles.feature_products_container}>
        {blog.productList.map(product => (
            <MiniProductCard key={product._id} product={product} link={true}/>
          ))}
        </div>
      </div>
      <div className={styles.comment_container}>
        <h1>COMMENTS
          {user && <button onClick={toggleAddComment}><i className="fa-solid fa-message"></i></button> }
        </h1>
        {showAdd && <NewComment handleAddComment={handleAddComment}/>}


        {blog.comments.length <= 0 ? 
            <h1>No Comments available</h1>
          :
            <>

              {blog.comments.map(comment =>(
                  <CommentCard key={comment._id} comment={comment}
                  deleteComment={handleDeleteComment}/>
                ))}
            </>
        }
      </div>

    </main>
  );
}

export default BlogDetails;