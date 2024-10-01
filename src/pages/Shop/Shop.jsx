// npm module
import { useEffect, useState } from 'react'

// css
import styles from './Shop.module.css'

const Shop = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
  
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
