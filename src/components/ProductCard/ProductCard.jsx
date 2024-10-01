// css
import styles from './ProductCard.module.css'

const ProductCard = ({product}) => {
  return (
    <div className={styles.product_container}>
      <img src="" alt="Product image" />
      <div className={styles.product_info}>
        <h1>{product.name ?product.name : "Not Availible" }</h1>
        <div className={styles.price}>{product.price ? product.price : "contact shop for price"}</div>
      </div>
    </div>
  )
}

export default ProductCard
