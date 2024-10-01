// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      <div className={styles.nav_container}>
        <div className={styles.site_Title}>Cultivation Corner</div>
          <ul>
            {/* <li>Welcome, {user.name}</li> */}
            {/* <li><NavLink to="/profiles">Profiles</NavLink></li>
            <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
             */}
          </ul>
          <ul>
            <li><NavLink to="/AboutUs">About Us</NavLink></li>
            <li>Shop</li>
            <li>Services</li>
            <li>Blog</li>
            
            {user ?
              <>
                <li><NavLink to="" onClick={handleLogout}><i className="fa-solid fa-circle-user"></i></NavLink></li>
              </>
              :
              <>
                <li><NavLink to="/auth/signup">Sign Up</NavLink></li>                
              <li><NavLink to="/auth/login">Log In</NavLink></li>
              </>
            }
          </ul>
      </div>
    </nav>
  )
}

export default NavBar
