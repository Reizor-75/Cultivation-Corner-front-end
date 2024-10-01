// css
import styles from './Services.module.css'

const Services = () => {  
  return (
    <main>
      <div className={styles.services_container}>
        <h1>Services</h1>
        <div className={styles.service}>

          Repotting service
          Plant Care Basics class
          Terrarium Making class
          Seasonal Plant craft class
        </div>
      </div>
    </main>
  )
}

export default Services