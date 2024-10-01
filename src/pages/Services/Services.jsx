// css
import styles from './Services.module.css'

const Services = () => {  
  return (
    <main>
      <div className={styles.services_container}>
        <h1>Services</h1>
        <p>
          Cultivation Corner offers a diverse range of services designed to enhance plant care and gardening experiences. These services typically include the sale of various indoor and outdoor plants, gardening supplies, and decorative pots. Additionally, the shop may provide expert advice on plant selection, care tips, and pest management, helping customers choose the right plants for their environment. Workshops and classes on topics like plant propagation, terrarium building, and seasonal gardening can also be available, fostering a community of plant enthusiasts. Furthermore, delivery and potting services may be offered to ensure a seamless experience for customers looking to beautify their spaces. <br/>
        </p>

        <p>Check out our upcoming classes</p>
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