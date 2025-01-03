// npm modules
import { useState } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'

// services
import * as productService from '../../services/productService'

// css
import styles from './EditProduct.module.css'

const EditProduct = () => {
  const { state } = useLocation()
  const [formData, setFormData] = useState( state)
  const navigate = useNavigate()

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault() 
    productService.updateProduct(formData)
    navigate(`/shops/${formData._id}`)
  }

  return ( 
    <main className={styles.container}>
      <h1>Edit {} Product</h1>

      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Product Name
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Quantity
          <input
            type="number"
            value={formData.quantity}
            name="quantity"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Price
          <input
            type="number"
            value={formData.price}
            name="price"
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Product Type
          <select 
            name="productType" 
            value={formData.productType}
            onChange={handleChange}
          >
            <option value="" disabled hidden>Select Product Type</option>
            <option value="plant">Plant</option>
            <option value="soil">Soil</option>
            <option value="fertilizer">Fertilizer</option>
            <option value="planter">Planter</option>
            <option value="tool">Tool</option>
          </select>
        </label>
        <label className={styles.label}>
          Description
          <textarea
            type="text"
            value={formData.description}
            name="description"
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Care Instructions
          <textarea
            type="text"
            value={formData.careInstructions}
            name="careInstructions"
            onChange={handleChange}
            required
          />
        </label>
        <div>
          <Link to="/">Cancel</Link>
          <button
            className={styles.button}
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}

export default EditProduct;