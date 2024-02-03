import styles from './Favourite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import { selectFavouriteCards } from '../../redux/cardsReducer.js';
import { useSelector } from "react-redux";
import Card from "../Card/Card.js";

const Favourite = () => {

  const favouriteCards = useSelector(selectFavouriteCards);
  console.log('favouriteCards', favouriteCards);

  return(
    <article className={styles.favourite}>
    <PageTitle>
      Favourite
    </PageTitle>
    <div className={styles.column}>
      {favouriteCards.length === 0 ? (
          <p>No cards...</p>
        ) : (
          <ul>
            {favouriteCards.map(card => (
              <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
            ))}
          </ul>
      )}
    </div>
    </article>
  );
};

export default Favourite;