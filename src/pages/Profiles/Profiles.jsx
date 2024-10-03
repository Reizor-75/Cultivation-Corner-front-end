// npm modules
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profiles.module.css'

const Profiles = ({user}) => {
  const [profiles, setProfiles] = useState([])
  const [formData, setFormData] = useState({
    role:''
  })

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()

  }
  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <main className={styles.container}>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map(profile => (
        <p key={profile._id}>{profile.name}
        {user?.role === 900  &&
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
        }
        </p>
      ))}
    </main>
  )
}

export default Profiles
