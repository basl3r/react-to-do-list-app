import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
//import shortid from 'shortid';

const ColumnForm = props => {

    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: { /*id: shortid(),*/ title: value, icon: icon } });
        setValue('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
          <span>Title: </span>
          <TextInput value={value} onChange={e => setValue(e.target.value)} />
          <span> Icon: </span>
          <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>
              <span>Add column</span>
            </Button>
        </form>
	);
};

export default ColumnForm;