import styles from './Button.module.scss';

const Button = btn => {
  console.log('btn', btn);
  return (<button className={styles.button}>{btn.children}</button>)
};

export default Button;


//<button className={styles.button}>Search</button>