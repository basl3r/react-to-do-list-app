import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput.js';

const CardForm = ({ addCard, columnId }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard({ title: value }, columnId);
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