
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
    <div className={styles.read_more}>
    <div className={styles.dash}>&#8212;</div>
    <div className={styles.rm_text}>Read More</div>
    </div>
  </div> );
}

export default BlogCard;