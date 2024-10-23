
// css
import styles from './BlogCard.module.css'

const BlogCard = ({ blog }) => {
  return ( 
  <div className={styles.blog_container}>
    <div className={styles.image_container}>
      <img className={styles.blog_cover_photo} src="" alt="Cover Photo"/>
    </div>
    <div className={styles.blog_title}>{blog.title}</div>
    <div className={styles.blog_content}>{blog.content}</div>
  </div> );
}

export default BlogCard;