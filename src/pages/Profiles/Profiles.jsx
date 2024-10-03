// npm modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profiles.module.css'

// components
import MemberCard from '../../components/MemberCard/MemberCard'

const Profiles = ({user}) => {
  const navigate = useNavigate()

  const [profiles, setProfiles] = useState([])

  const handleUpdateRole = async(formData, memberId) =>{
    await profileService.updateRole(formData, memberId)
    
  }

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if(user.role != 900){
    navigate('/')
  }
  
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
