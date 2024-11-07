// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      <div className={styles.nav_container}>
        <div className={styles.site_Title}> <NavLink to="/">CULTIVATION CORNER</NavLink></div>
          <ul>
            {/* <li>Welcome, {user.name}</li> */}
            {/* <li><NavLink to="/profiles">Profiles</NavLink></li>
            <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
             */}
          </ul>
        <div className={styles.navigation_links}>
          <NavLink className={styles.reg_links} to="/AboutUs">ABOUT US</NavLink>
          <NavLink className={styles.reg_links} to="/Shop">SHOP</NavLink>
          <NavLink className={styles.reg_links} to="/Services">SERVICES</NavLink>
          <NavLink className={styles.reg_links} to="/Blogs">BLOG</NavLink>
            {user ?
              <>               
                <NavLink className={styles.user_link} to={`/profiles/${user.profile}`}> PROFILE</NavLink>
                {/* <NavLink className={styles.user_link} to="/auth/change-password">Change Password</NavLink> */}
                <NavLink className={styles.user_link} to="" onClick={handleLogout}>LOG OUT</NavLink>
              </>
              :
              <>    
                <NavLink className={styles.user_link} to="/auth/signup">SIGN UP</NavLink>
                <NavLink className={styles.user_link} to="/auth/login">LOG IN</NavLink>
              </>
            }
        </div>        
      </div>
      {/* <hr /> */}
    </nav>
  )
}

export default NavBar
