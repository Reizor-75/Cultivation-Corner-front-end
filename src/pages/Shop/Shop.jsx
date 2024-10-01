// npm module
import { useEffect, useState } from 'react'

// css
import styles from './Shop.module.css'

// services
import *as productService from '../../services/productService'

const Shop = () => {
  const [products, setProducts] = useState()
  
  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await productService.getAllProducts()
      setProducts(productData)
    }
    fetchProducts()
  }, [])

  return (
    <main className={styles.container}>
      <div className={styles.shop_container}>
        <h1>Products</h1>
      </div>
    </main>
  )
}

export default Shop
