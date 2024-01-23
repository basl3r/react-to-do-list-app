import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload});
export const updateString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload});
//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = ({columns}) => {
  return columns;
};

const reducer = (state, action) => {
switch(action.type) {
  case 'ADD_COLUMN':
    return { ...state, columns: [...state.columns, { ...action.payload, id: shortid()}]};
  case 'ADD_CARD':
    return {...state, cards: [...state.cards, {...action.payload, id: shortid()}]};
  case 'UPDATE_SEARCHSTRING':
    return {...state, searchString: action.payload.searchedString};
  default:
    return state;
}
  // if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, { ...action.newColumn, id: shortid()}]}
  //return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;