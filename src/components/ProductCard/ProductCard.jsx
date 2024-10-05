// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './ProductCard.module.css'

const ProductCard = ({user, product, handleDeleteProduct}) => {
  return (
    <NavLink to={`/Shop/${product._id}`}>
      <div className={styles.product_container}> 
        {user?.role === 900 && 
          <div className={styles.delete_button} onClick={()=>handleDeleteProduct(product._id)}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>
        }
        <img className= {styles.product_image} src="" alt="Product image" />
        <div className={styles.product_info}>
          <h1>{product.productName ?product.productName : "Not Availible" }</h1>
          <div className={styles.bottom_row}>{product.price ? "$ " + product.price : "contact shop for price"}
            {user?.role >= 500 && <button>Edit</button> }
          </div>
        </div> 
      </div>
    </NavLink>
  )
}

export default ProductCard
