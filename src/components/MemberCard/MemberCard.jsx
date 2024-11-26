// npm modules
import { useState } from 'react'

// css
import styles from './MemberCard.module.css'

import defaultMember from '../../assets/DefaultMember.jpg'

const MemberCard = ({user, member, handleUpdateRole}) => {
  const [formData, setFormData] = useState({
    role: member.role
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    handleUpdateRole(formData, member._id)
  }

  const formatRole = ()=>{
    if(member?.role === 900) return "Owner";
    else if (member?.role >= 500) return "Employee";
    else return "Member";
  }

  return (
    <div className={styles.staff_profile}>
      <div className={styles.image_container}>
        <img className={styles.staff_mem_photo} src={member.photo ? member.photo : defaultMember} alt="Member picture placeHolder"/>
        </div>
      <div className={styles.staff_mem_info}>
        <div className={styles.staff_mem_name}>{member.name ? member.name : `name` }: {formatRole()}</div>
        {user?.role === 900  ?
          <>
            {user.profile !== member._id &&
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
                      // checked={formData.role === 100}
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
                      // checked={formData.role === 500}
                      onChange={handleChange}/>
                  </label> 
                  <label htmlFor="900">Owner
                    <input              
                      required 
                      type="radio"          
                      className={styles.role_number}
                      name="role"
                      value= "900" 
                      // checked={formData.role === 900}
                      onChange={handleChange}/>
                  </label> 
                </div>
                <button className={styles.update_role}>Update Role</button>
              </form>
            }
          </>
          :          
          <div className={styles.staff_mem_bio}>{member.aboutMe ? member.aboutMe: "About Me"}</div>
        }
      </div>
    </div>
  )
}

export default MemberCard
