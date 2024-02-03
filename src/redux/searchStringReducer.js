// selectors

// actions
const createActionName = actionName =>  `app/string/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING')

// action creators
export const updateString = payload => ({ type: UPDATE_SEARCHSTRING, payload});

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload.searchedString;
    default:
      return statePart;
  }
}

export default searchStringReducer;