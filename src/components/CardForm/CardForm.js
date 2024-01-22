import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';

const CardForm = ({ columnId }) => {
  console.log('columnId', columnId);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_CARD', payload: {title: value, columnId: columnId}});
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput value={value} onChange={(e) => setValue(e.target.value)} />
      <Button>
        <span>Add card</span>
      </Button>
    </form>
  );
};

export default CardForm;