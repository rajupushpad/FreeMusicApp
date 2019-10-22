import * as actionTypes from './actionTypes'
import axios from 'axios'
import APP_CONSTANTS from '../app_constants'

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
    axios.post(`http://localhost:3000/posts`,data,header).then((response) => {
      alert(response.data.message)
      dispatch(uploadPostSuccess(response.data))
    })
    .catch(error => {
        alert(error)
      dispatch(createError(error))
    })
  };
}

export function handleSuccess(response){
    return {
        type: actionTypes.ADD_LIKES,
        payload: {
            response,
        }
    }
}

export function removeLikeSuccess(response){
    return {
        type: actionTypes.REMOVE_LIKE,
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

export  function addLike(likes) {
  let header = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': likes.token
      }
    }
  return function (dispatch) {
    // Submit email/password to the server
    axios.post(`${appConstants.WEB_SERVICE_URL}/likes`, likes, header)
      .then(response => {
        dispatch(handleSuccess(response.data))
      }).catch(error=> {
          alert(error.response.data.message)
        // dispatch(createSignUpError(response.data.error))
      });

  };
};

export  function removeLike(likes) {
  let header = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': likes.token
      }
    }
  return function (dispatch) {
    // Submit email/password to the server
    axios.delete(`${appConstants.WEB_SERVICE_URL}/likes/`+likes.post_id, header)
      .then(response => {
        dispatch(removeLikeSuccess(response.data))
      }).catch(error=> {
          alert(error.response.data.message)
        // dispatch(createSignUpError(response.data.error))
      });

  };
};
