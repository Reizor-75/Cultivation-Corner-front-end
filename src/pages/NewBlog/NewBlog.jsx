// npm module
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// services
import * as blogService from '../../services/blogService'
import * as productService from '../../services/productService'

// components
import MiniProductCard from '../../components/MiniProductCard/MiniProductCard'

// css
import styles from './NewBlog.module.css'

const NewBlog = ({user}) => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() =>{
    if(!user || user.role <500){
      navigate("/")
    }

    const fetchProducts= async () => {
      const data = await productService.getAllProducts()
      setProducts(data)
    }
    fetchProducts()
  }, [user, navigate])

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    productList: [],
  })

  const handleOptionChange = evt =>{
    const fetchProduct = async ()=> {
      const data = await productService.showProduct(evt.target.value)    
      setFormData({productList: [...formData.productList, data]})
      setProducts(products.filter((p) => p._id !== data._id))
    }
    fetchProduct() 
  }

  const handleRemoveOption = (product) => {
    setProducts([...products, product])    
    setFormData({productList: formData.productList.filter((p) => p._id !== product._id)})
  }

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
          {productList?.length === 0 ? 
            "No Products Feature"
          :
            <div className={styles.product_container}>
              {productList.map(product =>(
                <div className={styles.product_container} key={product._id}
                onClick={()=>handleRemoveOption(product)} >
                  <MiniProductCard product={product} link={false}/>
                </div>
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
          <select
            type="text"
            name="productList"
            // value={products}
            className={styles.input}
            placeholder='Products Feature'
            onChange={handleOptionChange}
            multiple
          >
            {products.map((product) => 
              <option key={product._id} value={product._id}> {product.name}</option>
            )}
          </select>
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