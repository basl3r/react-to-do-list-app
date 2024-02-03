import styles from './Card.module.scss';
import { updateFavourite, deleteCard } from '../../redux/cardsReducer';
import { useDispatch } from 'react-redux';

const Card = props => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateFavourite(props.id));
  }

  const handleDelete = () => {
    console.log('props', props)
    dispatch(deleteCard(props.id));
  }

  return (
      <li className={styles.card}>{props.title}
      <div>
        <button onClick={handleClick}><i className={`fa ${props.isFavorite ? 'fa-star' : 'fa-star-o'}`}></i></button>
        { props.showDeleteButton && (<button onClick={handleDelete}><i className='fa fa-trash'></i></button>)}
      </div>
      </li>      
  );
};

export default Card;
