import * as ActionTypes from '../constants/constants';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER :
      return action.user;

    default:
      return state;
  }
};

export default userReducer;
