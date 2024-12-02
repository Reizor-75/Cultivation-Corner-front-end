//component
import Carousel from '../../components/Carousel/Carousel'

// css
import styles from './Landing.module.css'


const Landing = () => {
  return (
    <main className={styles.main_container}>
      <div className={styles.landing_container}>
        {/* <div className={styles.image_container}>
          <img src="" alt="Slideshow of Plant Shop" />
        </div> */}
        <Carousel></Carousel>
        <div className={styles.shop_details}>
          <div className={styles.map}>Map</div>
          <div className={styles.shop_info}>
            <div className="shop_hours">
              <h2>Hours</h2>
              <ul className={styles.hours}>
                <li className={styles.time_slot}>Sun: 10:00 -6:00</li>
                <li className={styles.time_slot}>Mon-Fri: 10:00-7:00</li>
              </ul>
            </div>
            <div className="shop_address">
              <h2>Address</h2>
              <p>Bowling Green, New York, NY 10004</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Landing
