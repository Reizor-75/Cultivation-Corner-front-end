// npm module
import { useState,useRef } from "react"
import { useLocation, Link, useNavigate } from "react-router-dom"

// services
import * as profileServices from "../../services/profileService"

// css
import styles from "./EditProfile.module.css"
const EditProfile = ({user}) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState( state)
  const [photoData, setPhotoData] = useState({ photo: null })
  const [message, setMessage] = useState("")

  const imgInputRef = useRef(null)
  const navigate = useNavigate()

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
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    await profileServices.updateProfile(formData,  photoData.photo)
    navigate(`/profiles/${state._id}`)
  }

  if(!formData || user.profile != state._id) return(
    <h1>Page Not Found</h1>
  )

  return (
    <main className={styles.main_container}>
      <h1>Edit Profile</h1><p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <img src={state.photo} alt="Profile Photo" />
      <label className={styles.label}>
          Name
          <input type="text" value={formData.name} name="name" 
          placeholder=""
          onChange={handleChange}
          required />
        </label>
        <label className={styles.label}>
          Address
          <input type="text" value={formData.address} name="address"
          placeholder="Mailing Address"
          onChange={handleChange} />
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
        {formData.role >= 500 && 
          <label className={styles.label}>
          About Me
          <textarea  
          value={formData.aboutMe} name="aboutMe"
          placeholder="Write a bit about yourself!"
          className={styles.aboutMe}
          onChange={handleChange} />  
          </label>
        }
        <Link to="/">Cancel</Link>
        <button className={styles.submit_button}>Save Changes</button>
      </form>
    </main>
  );
}

export default EditProfile;