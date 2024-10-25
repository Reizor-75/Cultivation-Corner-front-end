// npm modules
import { NavLink } from 'react-router-dom';

// css
import styles from './BlogCard.module.css'

const BlogCard = ({ blog }) => {
  return ( 
    <NavLink to={`/blogs/${blog._id}`}>
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
      </div>
    </NavLink>
  );
}

export default BlogCard;