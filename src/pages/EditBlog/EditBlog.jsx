// npm module
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// services
import * as blogService from '../../services/blogService'
import * as productService from '../../services/productService'

// components
import MiniProductCard from '../../components/MiniProductCard/MiniProductCard'

// css
import styles from './EditBlog.module.css'

const EditBlog = () => {
  const { state } = useLocation()
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchProducts= async () => {
      const data = await productService.getAllProducts()
      setProducts(data)
    }
    fetchProducts()

  },[])

  const [formData, setFormData] = useState(state)

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
    await blogService.updateBlog(formData)
    navigate('/blogs')
  }

  const { title, content, productList } = formData
  return (
    <main className={styles.edit_blog_container}>
      <h1>Edit Blog Post
        
      </h1>
      
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
      <button>Submit</button>
          <input
            type="text"
            value={title}
            name="title"
            className={styles.input}
            placeholder={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            type="text"
            value={content}
            name="content"
            placeholder={formData.content}
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
        <div className={styles.featured_products}>
            <h2>Featured Products</h2>
          {productList?.length === 0 ? 
            "No Products Feature"
          :
            <div className={styles.product_container}>
              {productList?.map(product =>(
                <div className={styles.product} key={product._id}
                onClick={()=>handleRemoveOption(product)} >
                  <MiniProductCard product={product} link={false}/>
                  <i className="fa-solid fa-ban"></i>
                </div>
              ))}
            </div>
          }
        </div>
      </form>
    </main>
  
  );
}

export default EditBlog;