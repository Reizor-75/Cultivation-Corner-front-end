// css
import styles from './EditBlog.module.css'

const EditBlog = ({blog}) => {
  return (
    <main className={styles.edit_blog_container}>
      <h1>{blog.title}</h1>
    </main>
  
  );
}

export default EditBlog;