// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      <div className={styles.nav_container}>
        <div className={styles.site_Title}> <NavLink to="/">Cultivation Corner</NavLink></div>
          <ul>
            {/* <li>Welcome, {user.name}</li> */}
            {/* <li><NavLink to="/profiles">Profiles</NavLink></li>
            <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
             */}
          </ul>
        <div className={styles.navigation_links}>
          <NavLink className={styles.reg_links} to="/AboutUs">About Us</NavLink>
          <NavLink className={styles.reg_links} to="/Shop">Shop</NavLink>
          <NavLink className={styles.reg_links} to="/Services">Services</NavLink>
          <NavLink className={styles.reg_links} to="/Blogs">Blog</NavLink>
            {user ?
              <>               
                <NavLink className={styles.user_link} to={`/profiles/${user.profile}`}>My Profile</NavLink>
                <NavLink className={styles.user_link} to="/auth/change-password">Change Password</NavLink>
                <NavLink className={styles.user_link} to="" onClick={handleLogout}>Log Out</NavLink>
              </>
              :
              <>    
                <NavLink className={styles.user_link} to="/auth/signup">Sign Up</NavLink>
                <NavLink className={styles.user_link} to="/auth/login">Log In</NavLink>
              </>
            }
        </div>        
      </div>
      {/* <hr /> */}
    </nav>
  )
}

export default NavBar
