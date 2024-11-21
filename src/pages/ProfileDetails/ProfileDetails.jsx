// npm modules
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

// services
import * as profileServices from "../../services/profileService"

// css
import styles from './ProfileDetails.module.css'

const ProfileDetails = ({user}) => {
  const {profileId} = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() =>{
    const fetchProfile= async () => {
      const data = await profileServices.showProfile(profileId)
      setProfile(data)
    }
    fetchProfile()
  }, [profileId])

  if(!profile) return( <h1>Profile Not Found</h1>)

  return (
    <main className={styles.main_container}>
      <div className={styles.profile_container}>
        <div className={styles.image_container}>
          <img src="" alt={`${profile.name}'s Photo`} />
        </div>
        <div className={styles.profile_details}>       
          <div className={styles.header}>
            <div className={styles.profile_name}>{profile.name}
            </div>
            {user?.profile === profileId &&
              <div className={styles.user_buttons}>
                <NavLink to="/"><button className={styles.user_button}>Update Profile</button></NavLink>
                <NavLink to='/auth/change-password'><button className={styles.user_button}>Change Password</button></NavLink>
              </div>
            }
          </div>
          <div className={`${styles.address} ${styles.sub_container}`}>
            <div className={`${styles.address} ${styles.sub_header}`}>Address</div>
            <div className={styles.profile_address}>{profile.address ? profile.address: "No Saved Address "}</div>
          </div>
          <div className={`${styles.aboutMe} ${styles.sub_container}`}>
            <div className={styles.sub_header}>   About Me</div>            
            {profile.aboutMe}  
            test
          </div>
          <div className={`${styles.orders} ${styles.sub_container}`}>
            <div className={styles.sub_header}>   Orders</div>
            <div>{profile.orders.length !=0 ? "my Orders" : "No Orders placed"}            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default ProfileDetails;