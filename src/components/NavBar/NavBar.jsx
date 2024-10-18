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
          <NavLink to="/AboutUs">About Us</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/Services">Services</NavLink>
          <NavLink to="/Blogs">Blog</NavLink>
              
          {user ?
            <>
              <NavLink to="" onClick={handleLogout}><i className="fa-solid fa-circle-user"></i></NavLink>
            </>
            :
            <>
              <NavLink to="/auth/signup">Sign Up</NavLink>
              <NavLink to="/auth/login">Log In</NavLink>
            </>
          }
        </div>
        
      </div>
      <hr />
    </nav>
  )
}

export default NavBar
