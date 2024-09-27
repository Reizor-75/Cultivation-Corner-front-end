// css
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <main>
      <h1>About Us</h1>
      <div className={styles.shop_Image}> shop image Place holder</div>
      <p className={styles.blurb}> Welcome to Cultivation Corner.<br/>
      At Cultivation Corner, we believe in the power of plants to brighten lives and foster connections. Nestled in the heart of Willow Creek, our store is more than just a place to find beautiful greenery—it's a community hub where nature lovers come together to share their passion.<br/><br/>

A Note About Our Journey:.<br/>

As we grow and evolve, we want you to know that this section is just a placeholder for something bigger! We’re in the process of crafting a vibrant narrative that reflects our vision, values, and the exciting plans we have for our community.<br/><br/>

We’re committed to not only providing a diverse selection of plants but also creating a space for workshops, plant swaps, and gatherings that celebrate our love for nature. Your feedback and ideas are invaluable to us as we shape this journey together.

Thank you for being a part of Green Haven. We can't wait to see what we’ll grow together! Stay tuned for more updates as we continue to blossom.<br/><br/>

Happy planting! 🌱</p>

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
