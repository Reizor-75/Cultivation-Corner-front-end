// npm modules
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// services
import * as profileServices from "../../services/profileService"

// css
import styles from './ProfileDetails.module.css'

const ProfileDetails = () => {
  const {profileId} = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() =>{
    const fetchProfile= async () => {
      const data = await profileServices.showProfile(profileId)
      setProfile(data)
    }
    fetchProfile()
  }, [profileId])

  return (
    <main className={styles.main_container}>
      {profile?.name}
      <h1>test</h1>
    </main>
  );
}

export default ProfileDetails;