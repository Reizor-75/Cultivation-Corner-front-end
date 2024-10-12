// npm module
import { useState } from 'react';

// css
import styles from './NewBlog.module.css'

const NewBlog = () => {
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
      </form>
    </main>
  );
}

export default NewBlog;