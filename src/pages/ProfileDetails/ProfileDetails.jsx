
// css
import styles from './ProfileDetails.module.css'

const ProfileDetails = ({profile}) => {
  return (
    <main className={styles.main_container}>
      {profile.name}
    </main>
  );
}

export default ProfileDetails;