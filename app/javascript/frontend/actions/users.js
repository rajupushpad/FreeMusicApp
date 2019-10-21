import * as actionTypes from './actionTypes'
import axios from 'axios'
import APP_CONSTANTS from '../app_constants'
export const signInUserSuccess = (response) => ({
    type: actionTypes.SIGN_IN_USER_SUCCESS,
    payload: {
        response,
    }
})

export const signInUserError = (error) => ({
    type: actionTypes.SIGN_IN_USER_ERROR,
    payload: {
        error
    }
})

export function signInUser(data) {
  debugger
  return async function (dispatch) {
    axios.post(`${APP_CONSTANTS.url}/api/user`,data).then((response) => {
      dispatch(signInUserSuccess(response))
    })
    .catch(error => {
      dispatch(createError(error.response.data.error))
    })
  };
}


export const signOutUserSuccess = (response) => ({
    type: actionTypes.SIGN_OUT_USER_SUCCESS,
    payload: {
        response,
    }
})

export const signOutUserError = (error) => ({
    type: actionTypes.SIGN_OUT_USER_ERROR,
    payload: {
        error
    }
})
