// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>

      <div className={styles.landing_container}>
        <img src="" alt="slideshow of Plant Shop" />
        <div className={styles.shop_details}>
          <div className={styles.map}>Map</div>
          <div className={styles.shop_info}>
            <div className="shop_hours">
              <h2>Hours</h2>
              <ul className={styles.hours}>
                <li>Sun: 10:00 -6:00</li>
                <li>Mon-Fri: 10:00-7:00</li>
              </ul>
            </div>
            <div className="shop_address">
              <h2>Address</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Landing
