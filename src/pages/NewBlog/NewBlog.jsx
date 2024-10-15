// npm module
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// services
import * as blogService from '../../services/blogService'

// css
import styles from './NewBlog.module.css'

const NewBlog = () => {
  const navigate = useNavigate()

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
          content
          <textarea
            type="text"
            value={content}
            name="content"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Products
        <input
            type="text"
            value={productList}
            name="productList"
            onChange={handleChange}
            required
          />
        </label>
      </form>
    </main>
  );
}

export default NewBlog;