import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
debugger

switch(action.type) {
  case 'ADD_COLUMN':
    return { ...state, columns: [...state.columns, { ...action.payload, id: shortid()}]}
  case 'ADD_CARD':
    console.log('action.columnId', action.columnId);
    return {...state, cards: [...state.cards, {...action.payload, id: shortid()}]};
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