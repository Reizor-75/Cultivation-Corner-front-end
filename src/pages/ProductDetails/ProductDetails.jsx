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

  let productImage = ''

  if (product.photo) productImage = product.photo
  else if(product.productType === 'plant') productImage = 'https://cdn.pixabay.com/photo/2023/11/24/18/52/cat-8410502_1280.jpg'
  else if(product.productType === 'soil') productImage = 'https://cdn.pixabay.com/photo/2024/03/30/00/55/gardening-8663870_1280.png'
  else if(product.productType === 'fertilizer') productImage = 'https://cdn.pixabay.com/photo/2022/11/08/14/42/monstera-7578722_1280.png'
  else if(product.productType === 'planter') productImage = 'https://cdn.pixabay.com/photo/2024/03/24/18/32/cat-8653647_1280.png'
  else if(product.productType === 'tool') productImage = 'https://cdn.pixabay.com/photo/2020/01/04/06/29/gardening-4739846_1280.png'


  return (  
    <main>
      
      <div className={styles.product_container}>
        <div className={styles.image_container}>
          <img className={styles.product_photo} src={productImage} alt="Product photo" /></div>
        <div className={styles.product_info}>
          <h1 className={styles.product_Name}>{product.name}
          </h1>
          <div>
            $ {product.price}
            {user ?
              <button>Add To Cart</button>
              :
              <p>Sign up to purchase item</p>
            }
          </div>
          <p className={styles.product_description}>
            {product.productDescription ? product.productDescription 
            :
            <p>no product description available</p>
            }
            {product.careInstruction ? product.careInstruction
            :
              <p>no care Instructions available <br/>
                Contact an employee for more details.
              </p>
            }
          </p>
          
        </div>
      </div>
    </main>
  );
}

export default ProductDetails