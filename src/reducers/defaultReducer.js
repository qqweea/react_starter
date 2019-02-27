import * as TYPES from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.DEFAULT_ACTION:
      return {
        ...state,
        stateAdd: {
          new: action.payload
        }
      };
    default:
      return state;
  }
};
