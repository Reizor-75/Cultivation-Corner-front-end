// css
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <main>
      <h1>About Us</h1>
      <div className={styles.shop_Image}> shop image Place holder</div>
      <div className={styles.blurb}> shop story</div>

      <div className={styles.staff_Container}>
        <h1>meet the staff</h1>
        <div className={styles.staffProfile}>
          <div className={styles.staffMemPhoto}>Staff Member picture placeHolder</div>
          <div className={styles.staffMemInfo}>
            <div className={styles.staffMemName}>
              NAME
            </div>
            <div className={styles.staffMemBio}>About Me</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutUs
