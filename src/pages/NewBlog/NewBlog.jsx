// npm module
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// services
import * as blogService from '../../services/blogService'

// css
import styles from './NewBlog.module.css'

const NewBlog = ({user}) => {
  const navigate = useNavigate()

  useEffect(() =>{
    if(!user || user.role <500){
      navigate("/")
    }
  }, [user, navigate])

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    productList: [],
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    await blogService.createBlogPost(formData)
    navigate('/blogs')
  }

  const { title, content, productList } = formData

  return ( 
    <main className={styles.main_container}>
      <h1>New Blog</h1>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Post Title
          <input
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Products
          <input
              type="text"
              value={productList}
              name="productList"
              onChange={handleChange}

            />
        </label>
        <label className={styles.label}>
          Content
          <textarea
            type="text"
            value={content}
            name="content"
            onChange={handleChange}
            required
          />
        </label>
        <button className={styles.button}>Submit Post</button>
      </form>
    </main>
  );
}

export default NewBlog;