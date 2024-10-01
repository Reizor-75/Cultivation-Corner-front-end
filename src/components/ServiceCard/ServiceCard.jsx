// css
import styles from './ServiceCard.module.css'

const ServiceCard = () => {
  return (
    <div className={styles.service_container}>
      <div className={styles.service_title}> </div>
      <div className={styles.service_description}></div>
      <div className={styles.service_info}></div>
    </div>
  )
}

export default ServiceCard
