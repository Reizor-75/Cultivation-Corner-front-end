import { NavLink } from 'react-router-dom';

// css
import styles from './Footer.module.css'

const Footer = () => {
  return ( 
  <footer className={styles.footer_container}>
    <div className={styles.quick_links}>
      <h2>Quick Links</h2>
      <ul>
        <NavLink className={styles.reg_links} to="/">Home</NavLink>
        <NavLink className={styles.reg_links} to="/AboutUs">About Us</NavLink>
        <NavLink className={styles.reg_links} to="/Shop">Shop</NavLink>
        <NavLink className={styles.reg_links} to="/Services">Services</NavLink>
        <NavLink className={styles.reg_links} to="/Blogs">Blog</NavLink>
      </ul>
      {/* <div className={styles.store_policies}>Store Policies</div> */}
    </div>
    <div className={styles.socials_container}> 
      <h2>Socials</h2>
      <ul className={styles.socials}>
        <li><a href="http://instagram.com" target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
        <li><a href="http://x.com" target='_blank'><i className="fa-brands fa-x-twitter"></i></a></li>
        <li><a href="http://tiktok.com" target='_blank'><i className="fa-brands fa-tiktok"></i></a></li>
        <li><a href="http://facebook.com" target='_blank'><i className="fa-brands fa-facebook"></i></a> </li>
        <li><a href="http://pinterest.com" target='_blank'><i className="fa-brands fa-pinterest"></i></a></li>
      </ul>
    </div>
    <div className={styles.mailing_list}>
      <h2>Join Our Mailing List</h2>
      <form action="" className={styles.mailingList_form}>
        <input type="Email" 
            value=''
            name="Email"
            placeholder='Enter Your Email'
            className={styles.input}
            required/>
        <button className={styles.submit_button}>Submit</button>
      </form>
    </div>
  </footer> 
  );
}

export default Footer;