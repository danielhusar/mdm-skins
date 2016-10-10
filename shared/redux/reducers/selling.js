import * as ActionTypes from '../constants/constants';

const initialState = null;

const sellingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SELLING :
      return action.selling;

    default:
      return state;
  }
};

export default sellingReducer;
