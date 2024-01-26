import styles from './NavBar.module.scss';

const NavBar = () => {
  return(
    <div className={styles.nav_bar}>
      <span><i className={'fa fa-server ' + styles.nav_icon}></i></span>
      <div className={styles.nav_list}>
        <li><a href="/">Home</a></li>
        <li><a href="/favourite">Favourite</a></li>
        <li><a href="/about">About</a></li>
      </div>
    </div>
  );
};

export default NavBar;
