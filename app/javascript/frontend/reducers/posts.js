import { APP_CONSTANTS } from '../app_constants';
import * as actionTypes from '../actions/actionTypes'

const initialState = {
	post_add_success: {},
	like_res: {},
	unlike_res: {}
}

const posts = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPLOAD_POST_SUCCESS:
			return { ...state, post_add_success: action.payload.response };
		
		case actionTypes.ADD_LIKES:
			return { ...state, like_res: action.payload.response };

		case actionTypes.REMOVE_LIKE:
			return { ...state, post_add_success: action.payload.response };
		default:
			return state
	}
}

export default posts;