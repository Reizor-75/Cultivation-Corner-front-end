// npm module
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate} from 'react-router-dom'

// service
import * as productService from "../../services/productService"

// css
import styles from './NewProduct.module.css' 

const NewProduct = ({ user }) => {
  const navigate = useNavigate()
  const imgInputRef = useRef(null)

  useEffect(() =>{
    if(!user || user.role <500){
      navigate("/")
    }
  }, [user, navigate])

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    productType: '',
    description: '',
    careInstructions: '',
  })
  const [photoData, setPhotoData] = useState({ photo: null })

  const handleChangePhoto = evt => {
    const file = evt.target.files[0]
    let isFileInvalid = false
    let errMsg = ""
    const validFormats = ['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']
    const photoFormat = file.name.split('.').at(-1)

    // cloudinary supports files up to 10.4MB each as of May 2023
    if (file.size >= 10485760) {
      errMsg = "Image must be smaller than 10.4MB"
      isFileInvalid = true
    }
    if (!validFormats.includes(photoFormat)) {
      errMsg = "Image must be in gif, jpeg/jpg, png, svg, or webp format"
      isFileInvalid = true
    }
    
    setMessage(errMsg)
    
    if (isFileInvalid) {
      imgInputRef.current.value = null
      return
    }

    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    await productService.createProduct(formData, photoData)
    navigate('/shop')
  }

  const { name, quantity, price, productType, description ,careInstructions } = formData

  return (
    <main className={styles.container}>
      <h1>Add New Product</h1>
      <p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Product Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Quantity
          <input
            type="number"
            value={quantity}
            name="quantity"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Price
          <input
            type="number"
            value={price}
            name="price"
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Product Type
          <select 
            name="productType" 
            value={productType}
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
          Upload Photo
          <input 
            type="file" 
            name="photo" 
            onChange={handleChangePhoto}
            ref={imgInputRef}
          />
        </label>
        <label className={styles.label}>
          Description
          <textarea
            type="text"
            value={description}
            name="description"
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Care Instructions
          <textarea
            type="text"
            value={careInstructions}
            name="careInstructions"
            onChange={handleChange}
            required
          />
        </label>
        <div>
          <Link to="/">Cancel</Link>
          <button className={styles.button}>
            Add Product
          </button>
        </div>
      </form>
    </main>
  );
}

export default NewProduct;