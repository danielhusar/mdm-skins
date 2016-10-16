import * as ActionTypes from '../constants/constants';

const initialState = null;

const browseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BROWSE :
      return action.browse

    case ActionTypes.REMOVE_BROWSE :
      return initialState

    default:
      return state;
  }
};

export default browseReducer;
