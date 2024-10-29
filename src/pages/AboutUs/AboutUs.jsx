//npm modules
import { useEffect, useState } from 'react'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './AboutUs.module.css'

//components
import MemberCard from '../../components/MemberCard/MemberCard'

import plantShop from '../../assets/Store_Front.jpg'

const AboutUs = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const employeeData = await profileService.getEmployeeProfiles()
      setProfiles(employeeData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.shop_image_contaniner}>
          <img className={styles.shop_image } src={plantShop}  alt='Shop image Place holder'/>
        </div>
        <p className={styles.blurb}> 
          <h2>Welcome to Cultivation Corner</h2>
          At Cultivation Corner, we believe in the power of plants to brighten lives and foster connections. Nestled in the heart of Willow Creek, our store is more than just a place to find beautiful greenery—it's a community hub where nature lovers come together to share their passion.<br/><br/>
          A Note About Our Journey:.<br/>
          As we grow and evolve, we want you to know that this section is just a placeholder for something bigger! We’re in the process of crafting a vibrant narrative that reflects our vision, values, and the exciting plans we have for our community.<br/><br/>
          We’re committed to not only providing a diverse selection of plants but also creating a space for workshops, plant swaps, and gatherings that celebrate our love for nature. Your feedback and ideas are invaluable to us as we shape this journey together.
          Thank you for being a part of Green Haven. We can't wait to see what we’ll grow together! Stay tuned for more updates as we continue to blossom.<br/><br/>

          Happy planting! 🌱
        </p>

        <div className={styles.staff_container}>
          <h1>Meet the Staff</h1>
          { profiles.map(profile =>(
            <MemberCard key={profile._id} member={profile}></MemberCard> 
          ))}
        </div>
      </div>
    </main>
  )
}

export default AboutUs
