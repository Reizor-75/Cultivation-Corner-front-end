
// css
import styles from './BlogCard.module.css'

const BlogCard = ({ blog }) => {
  return ( 
  <div> className={styles.blog_container}
  <div className={styles.blog_title} >{blog.title}</div>
  <p className={styles.blog_content}>{blog.content}</p>
  </div> );
}

export default BlogCard;