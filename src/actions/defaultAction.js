import * as TYPES from './actionTypes';
import axios from 'axios';

export const defaultAction = (type = TYPES.DEFAULT_ACTION, payload) => dispatch => {
  dispatch({
    type: type,
    payload: payload
  });
};
