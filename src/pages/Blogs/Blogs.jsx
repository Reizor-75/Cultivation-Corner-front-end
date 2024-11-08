// npm modules
import { NavLink} from 'react-router-dom';

// componenets
import BlogCard from '../../components/BlogCard/BlogCard';
// css
import styles from './Blogs.module.css'

const Blogs = ({ user, blogs, handleDeleteBlog }) => {

  return (  
    <main className={styles.main_container}>
      {/* <h1>Blog</h1> */}
      { user?.role >= 500 && 
        <NavLink to="/blogs/newBlog"> <button><i className="fa-solid fa-plus"></i></button> </NavLink>
      }
      <div className={styles.recent_blog}></div>
      <div className={styles.blog_container}>
        { !blogs ? 
          "No Blogs Available"
        :
          blogs.map(blog =>(
            <BlogCard key={blog._id} 
              blog={blog} 
              handleDeleteBlog={handleDeleteBlog}/>
          ))
        }
      </div>
    </main>
  );
}



export default Blogs;