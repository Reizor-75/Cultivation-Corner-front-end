// npm module
import { useState } from "react"
import { useLocation } from "react-router-dom"

// css
import styles from "./EditProfile.module.css"

const EditProfile = ({user}) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState( state)

  
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
  }


  return (
    <main className={styles.main_container}>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>

      </form>
    </main>
  );
}

export default EditProfile;