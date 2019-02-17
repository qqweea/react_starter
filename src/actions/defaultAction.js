import * as TYPES from './actionTypes';
import axios from 'axios';

export const getFilterOptions = (type, payload) => dispatch => {
  dispatch({
    type: type,
    payload: payload
  });
};
