import { APP_CONSTANTS } from '../app_constants';
import * as actionTypes from '../actions/actionTypes'
const initialState = {
	auth_response: {}
}

const users = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.USER_AUTH_SUCCESS:
			return { ...state, auth_response: action.payload.response };

		case actionTypes.SIGN_OUT_USER_SUCCESS:
			return { ...state, auth_response: {} };
			
		default:
			return state
	}
}

export default users;
