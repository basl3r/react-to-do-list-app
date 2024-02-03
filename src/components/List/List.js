import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getColumnsByList } from '../../redux/columnsReducer';
import { getListById } from '../../redux/listsReducer';
import { useParams, Navigate } from 'react-router-dom';

const List = () => {

	const { listId } = useParams();
	const listData = useSelector(state => getListById(state, listId));
	const columnData = useSelector(state => getColumnsByList(state, listId));

	if(!listData) return <Navigate to="/" />
	return (
		<div className={styles.list}>
			<header className={styles.header}>
				<h2 className={styles.title}>{listData.title}</h2>
			</header>
			<p className={styles.description}>{listData.description}</p>
			<SearchForm />
			<section className={styles.columns}>
				{columnData.map(column => <Column key={column.id} {...column}/>)}      
			</section>
			  <ColumnForm props={listId} />
		</div>
	);
};

export default List;