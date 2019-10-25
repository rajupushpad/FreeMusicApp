import * as actionTypes from './actionTypes'
import axios from 'axios'
import {APP_CONSTANTS} from '../app_constants'

export function uploadPostSuccess(response){
    return {
        type: actionTypes.UPLOAD_POST_SUCCESS,
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

export function uploadPost(data) {
  let header = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': data.token,
      }
    }
  return async function (dispatch) {
    axios.post(`${APP_CONSTANTS.URL}/posts`,data,header).then((response) => {
      alert(response.data.message)
      dispatch(uploadPostSuccess(response.data))
    })
    .catch(error => {
        alert(error)
      dispatch(createError(error))
    })
  };
}

export function handleLikeSuccess(response){
    return {
        type: actionTypes.ADD_LIKES,
        payload: {
            response,
        }
    }
}

export function handleDisLikeSuccess(response){
    return {
        type: actionTypes.DISLIKE_SUCCESS,
        payload: {
            response,
        }
    }
}

export function handlePostFetchSuccess(response){
    return {
        type: actionTypes.HANDLE_POST_FETCH_SUCCESS,
        payload: {
            response,
        }
    }
}

export function handleError(response){
    return {
        type: actionTypes.HANDLE_ERROR,
        payload: {
            response,
        }
    }
}

export  function addLike(post) {
  let header = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': post.token
      }
    }
  return function (dispatch) {
    // Submit email/password to the server
    axios.post(`${APP_CONSTANTS.URL}/likes`, post, header)
      .then(response => {
        dispatch(handleLikeSuccess(response.data))
      }).catch(error=> {
          alert(error)
        // dispatch(createSignUpError(response.data.error))
      });

  };
};

export  function disLike(post) {
  let header = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': post.token
      }
    }
  return function (dispatch) {
    // Submit email/password to the server
    axios.post(`${APP_CONSTANTS.URL}/dislike`,post, header)
      .then(response => {
        dispatch(handleDisLikeSuccess(response.data))
      }).catch(error=> {
          alert(error)
        // dispatch(createSignUpError(response.data.error))
      });

  };
};


export  function fetchAllPost(token) {
  let header = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
  return function (dispatch) {
    // Submit email/password to the server
    axios.get(`${APP_CONSTANTS.URL}/fetch-posts`, header)
      .then(response => {
        dispatch(handlePostFetchSuccess(response.data))
      }).catch(error=> {
          alert(error)
        // dispatch(createSignUpError(response.data.error))
      });

  };
};
