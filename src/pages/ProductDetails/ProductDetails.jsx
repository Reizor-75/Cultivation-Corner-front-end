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
      setProduct(data)
    }
    fetchWorkshop()
  }, [productId])


  if(!product){
    return('Loading...')
  }

  return (  
    <main>
      
      <div className={styles.product_container}>
        <img className={styles.product_photo} src="" alt="Plant stock photo" />
        <div className={styles.product_info}>
          <h1 className={styles.product_Name}>{product?.productName}
          </h1>
          <p className={styles.product_description}>
            {product.productDescription}
            {product.careInstruction}
          </p>
          {user && 
            <button>Add To Cart</button>
          }
        </div>
      </div>
    </main>
  );
}

export default ProductDetails