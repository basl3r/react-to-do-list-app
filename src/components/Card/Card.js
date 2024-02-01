import styles from './Card.module.scss';
import { updateFavourite } from '../../redux/store.js';
import { useDispatch } from 'react-redux';

const Card = props => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateFavourite(props.id));
  }
  return (
      <li className={styles.card}>{props.title}
        <button onClick={handleClick}><i className={`fa ${props.isFavorite ? 'fa-star' : 'fa-star-o'}`}></i></button>
      </li>
  );
};

export default Card;
