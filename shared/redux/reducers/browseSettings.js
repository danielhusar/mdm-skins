import * as ActionTypes from '../constants/constants';

const initialState = null;

const browseSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BROWSE_SETTINGS :
      return action.settings

    case ActionTypes.REMOVE_BROWSE_SETTINGS :
      return initialState

    default:
      return state;
  }
};

export default browseSettingsReducer;
