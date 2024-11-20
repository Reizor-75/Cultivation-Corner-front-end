// css
import styles from './Footer.module.css'

const Footer = () => {
  return ( 
  <footer className={styles.footer_container}>
    <div className={styles.socials_container}>
      <h2>Socials</h2>
      <ul className={styles.socials}>
        <li><a href="http://instagram.com" target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
        <li><a href="http://x.com" target='_blank'><i className="fa-brands fa-x-twitter"></i></a></li>
        <li><a href="http://tiktok.com" target='_blank'><i className="fa-brands fa-tiktok"></i></a></li>
        <li><a href="http://facebook.com" target='_blank'><i className="fa-brands fa-facebook"></i></a> </li>
        <li><a href="http://pinterest.com" target='_blank'><i className="fa-brands fa-pinterest"></i></a></li>
      </ul>
      <div className={styles.store_policies}>Store Policies</div>
    </div>
    <div className={styles.mailing_list}>
      <h2>Join Our Mailing List</h2>
      <form action="" className={styles.mailingList_form}>
        <input type="email" />
        <button>Submit</button>
      </form>
    </div>
  </footer> 
  );
}

export default Footer;