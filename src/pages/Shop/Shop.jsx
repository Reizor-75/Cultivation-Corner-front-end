// npm module
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

// services
import *as productService from '../../services/productService'

// components 
import ProductCard from '../../components/ProductCard/ProductCard'

// css
import styles from './Shop.module.css'

const Shop = ({user}) => {
  const [products, setProducts] = useState()

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await productService.getAllProducts()
      setProducts(productData)
    }
    fetchProducts()
  }, [])

  if(!products){
    return(<>
      loading....
    </>)
  }
  return (
    <main className={styles.container}>
      <div className={styles.shop_container}>
        <h1>Products</h1>
        {user.role === 900 && 
          <NavLink to='/Shop/addProduct'><button>Add new Product</button></NavLink>
        }
        {products.map(product =>(
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </main>
  )
}

export default Shop
