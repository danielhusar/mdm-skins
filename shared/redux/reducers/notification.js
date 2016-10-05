import * as ActionTypes from '../constants/constants';

const initialState = null;

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NOTIFICATION :
      return {
        text: action.text,
        color: action.color,
      };
    case ActionTypes.REMOVE_NOTIFICATION :
      return initialState;

    default:
      return state;
  }
};

export default inventoryReducer;
