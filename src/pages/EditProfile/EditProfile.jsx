// npm module
import { useState } from "react"
import { useLocation, Link, useNavigate, useResolvedPath } from "react-router-dom"

// services
import * as profileServices from "../../services/profileService"

// css
import styles from "./EditProfile.module.css"

const EditProfile = ({user}) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState( state)
  const navigate = useNavigate()

  
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    navigate(`/profiles/${state._id}`)
  }

  if(!formData || user.profile != state._id) return(
    <h1>Page Not Found</h1>
  )

  return (
    <main className={styles.main_container}>
      <h1>Edit Profile</h1>
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
          About Me
          <textarea  
          value={formData.aboutMe} name="aboutMe"
          placeholder="Write a bit about yourself!"
          className={styles.aboutMe}
          onChange={handleChange} />  
        </label>
        <Link to="/">Cancel</Link>
        <button className={styles.submit_button}>Save Changes</button>
      </form>
    </main>
  );
}

export default EditProfile;