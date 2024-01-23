import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {

  const [searchedString, setSearchedString] = useState('');

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const handleSearch = e => { 
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: {searchedString}})
    setSearchedString('');
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <TextInput placeholder="Search..." value={searchedString} onChange={e => setSearchedString(e.target.value)}/>
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;