import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className={styles.nav_bar}>
      <span><i className={'fa fa-server ' + styles.nav_icon}></i></span>
      <div className={styles.nav_list}>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favourite">Favourite</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
      </div>
    </div>
  );
};

export default NavBar;
