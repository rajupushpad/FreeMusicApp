import { APP_CONSTANTS } from '../app_constants';
import * as actionTypes from '../actions/actionTypes'

const initialState = {
	post_add_success: {},
	like_res: {},
	dis_like_res: {},
	posts: []
}

const posts = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPLOAD_POST_SUCCESS:
			return { ...state, post_add_success: action.payload.response };
		
		case actionTypes.ADD_LIKES:
			return { ...state, like_res: action.payload.response };

		case actionTypes.DISLIKE_SUCCESS:
			return { ...state, dis_like_res: action.payload.response };

		case actionTypes.HANDLE_POST_FETCH_SUCCESS:
			return { ...state, posts: action.payload.response.posts };
			
		default:
			return state
	}
}

export default posts;