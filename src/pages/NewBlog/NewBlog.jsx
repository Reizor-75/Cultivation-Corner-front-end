// npm module
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// services
import * as blogService from '../../services/blogService'

// components
import ProductCard from '../../components/ProductCard/ProductCard'
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
      <div className={styles.newBlog_container}>
        <h1>New Blog</h1>
        <img src="" alt="Uploaded Cover Image" className={styles.cover_Image} />

        <div className={styles.featured_products}>
          {productList.length ===0 ? 
            "No Products Feature"
          :
            <div className={styles.product_container}>
              {productList.map(product =>(
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          }
        </div>

        <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={title}
            name="title"
            className={styles.input}
            placeholder='Post Title'
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={productList}
            name="productList"
            className={styles.input}
            placeholder='Products Feature'
            onChange={handleChange}
          />
          <textarea
            type="text"
            value={content}
            name="content"
            placeholder='Fill in'
            onChange={handleChange}
            required
          />
          <button className={styles.button}>Submit Post</button>
        </form>
      </div>
    </main>
  );
}

export default NewBlog;