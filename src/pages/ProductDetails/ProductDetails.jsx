// npm modules
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// services
import * as productServices from '../../services/productService'

// css
import styles from './ProductDetails.module.css'

const ProductDetails = ({user}) => {
  const {productId} = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() =>{
    const fetchWorkshop= async () => {
      const data = await productServices.showProduct(productId)
      console.log(data)
      setProduct(data)
    }
    fetchWorkshop()
  }, [productId])

  return (  
    <main>
      <h1 className={styles.product_container}>{product?.productName}</h1>
    </main>
  );
}

export default ProductDetails