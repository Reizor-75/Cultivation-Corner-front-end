// css
import styles from './ProductCard.module.css'

const ProductCard = ({user, product}) => {
  return (
    <div className={styles.product_container}>
      <img className= {styles.product_image} src="" alt="Product image" />
      <div className={styles.product_info}>
        <h1>{product.productName ?product.productName : "Not Availible" }</h1>
        <div className={styles.bottom_row}>{product.price ? "$ " + product.price : "contact shop for price"}
          {user.role >= 500 && <button>Edit</button> }
        </div>
      </div>
    </div>
  )
}

export default ProductCard
