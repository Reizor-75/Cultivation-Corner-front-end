// npm modules
import { useState } from 'react'

// css
import styles from './MemberCard.module.css'

const MemberCard = ({user, member, handleUpdateRole}) => {
  const [formData, setFormData] = useState({
    role:''
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    handleUpdateRole(formData)
  }

  return (
    <div className={styles.staff_profile}>
      <img className={styles.staff_mem_photo} src={member.photo ? member.photo : ""} alt="Member picture placeHolder"/>
      <div className={styles.staff_mem_info}>
        <div className={styles.staff_mem_name}>{member.name ? member.name : "name"}</div>
        {user?.role === 900  ?
          <form autoComplete="off" onSubmit={handleSubmit} className=''>
            <div className={styles.role_form}>
              <label htmlFor="100">
                Customer
                <input
                  required 
                  type="radio"          
                  className={styles.role_number}
                  name="role"
                  value= "100" 
                  onChange={handleChange}/>
              </label> 
              <label htmlFor="500">
                Employee
                <input
                  required 
                  type="radio"          
                  className={styles.role_number}
                  name="role"
                  value= "500" 
                  onChange={handleChange}/>
              </label> 
              <label htmlFor="900">Owner
                <input              
                  required 
                  type="radio"          
                  className={styles.role_number}
                  name="role"
                  value= "900" 
                  onChange={handleChange}/>
              </label> 
            </div>
            <button> update role </button>
          </form>
          :          
          <div className={styles.staff_mem_bio}>{member.aboutMe ? member.aboutMe: "About Me"}</div>
        }
      </div>
    </div>
  )
}

export default MemberCard
