import { NavLink } from "react-router-dom";

import styles from './MiniProductCard.module.css'

const MiniProductCard = ({product, link}) => {  
  let productImage = ''

  if (product.photo) productImage = product.photo
  else if(product.productType === 'plant') productImage = 'https://cdn.pixabay.com/photo/2023/11/24/18/52/cat-8410502_1280.jpg'
  else if(product.productType === 'soil') productImage = 'https://cdn.pixabay.com/photo/2024/03/30/00/55/gardening-8663870_1280.png'
  else if(product.productType === 'fertilizer') productImage = 'https://cdn.pixabay.com/photo/2022/11/08/14/42/monstera-7578722_1280.png'
  else if(product.productType === 'planter') productImage = 'https://cdn.pixabay.com/photo/2024/03/24/18/32/cat-8653647_1280.png'
  else if(product.productType === 'tool') productImage = 'https://cdn.pixabay.com/photo/2020/01/04/06/29/gardening-4739846_1280.png'

  if(link){
    return(
      <NavLink to={`/Shop/${product._id}`}>
        <div className={styles.product_container}> 
          <div className={styles.image_container}>             
            <img className= {styles.product_image} src={productImage} alt="Product image"/>
          </div>
          <div className={styles.product_info}>
            <p className={styles.title}>{product.name ?product.name : "Not Availible" }</p>
          </div> 
        </div>
      </NavLink>
  )}
  
  return(
    <div className={styles.product_container}> 
      <div className={styles.image_container}>             
        <img className= {styles.product_image} src={productImage} alt="Product image"/>
      </div>
      <div className={styles.product_info}>
        <p className={styles.title}>{product.name ?product.name : "Not Availible" }</p>
      </div> 
    </div>
  )
}
export default MiniProductCard;