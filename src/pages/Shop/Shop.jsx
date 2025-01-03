// npm module
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

// services
import *as productService from '../../services/productService'

// components 
import ProductCard from '../../components/ProductCard/ProductCard'

// css
import styles from './Shop.module.css'

const Shop = ({user}) => {
  const [products, setProducts] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await productService.getAllProducts()
      setProducts(productData)
    }
    fetchProducts()
  }, [])

  const handleDeleteProduct = async (productId) => {
    const deletedProduct = await productService.deleteProduct(productId)
    setProducts(products.filter((p) => p._id !== deletedProduct._id))
    navigate('/shop')
  }

  if(!products){
    return(<>
      loading....
    </>)
  }
  return (
    <main>
      <div className={styles.main_container}>
        <div className={styles.page_header}>
          {/* <h1>Products</h1> */}
          {user?.role === 900 && 
            <NavLink to='/Shop/newProduct'><button>Add new Product</button></NavLink>
          }
        </div>
        <div className={styles.product_container}>
          {products.map(product =>(
            <ProductCard key={product._id} product={product} user={user} handleDeleteProduct={handleDeleteProduct}></ProductCard>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Shop
