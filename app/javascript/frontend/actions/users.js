import * as actionTypes from './actionTypes'
import axios from 'axios'
import {APP_CONSTANTS} from '../app_constants'

export function userAuthSuccess(response){
    return {
        type: actionTypes.USER_AUTH_SUCCESS,
        payload: {
            response,
        }
    }
}

export function userLogOutSuccess(response){
    return {
        type: actionTypes.SIGN_OUT_USER_SUCCESS,
        payload: {
            response,
        }
    }
}

export const createError = (error) => ({
    type: actionTypes.USER_AUTH_ERROR,
    payload: {
        error
    }
})

export function userAuth(data) {
  return async function (dispatch) {
    axios.post(`${APP_CONSTANTS.URL}/user/authUser`,data).then((response) => {
      if(response.data.statusCode == 404 && !response.data.status){
        alert(response.data.message)
      }else{
        dispatch(userAuthSuccess(response.data))
      }
    })
    .catch(error => {
        alert(error)
      dispatch(createError(error))
    })
  };
}

export function logout(data) {
  return async function (dispatch) {
    dispatch(userLogOutSuccess(true))
  };
}

