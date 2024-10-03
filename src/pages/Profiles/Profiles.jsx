// npm modules
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profiles.module.css'

// components
import MemberCard from '../../components/MemberCard/MemberCard'

const Profiles = ({user}) => {
  const [profiles, setProfiles] = useState([])

  const handleUpdateRole = async(formData) =>{
    await profileService.updateRole(formData)
    
  }

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])


  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <main className={styles.container}>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map(profile => (
        <MemberCard key={profile._id} user={user} member={profile} handleUpdateRole={handleUpdateRole}/>
      ))}
    </main>
  )
}

export default Profiles
