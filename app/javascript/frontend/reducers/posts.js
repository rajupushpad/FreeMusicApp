import { APP_CONSTANTS } from '../app_constants';

const initialState = {
	post_add_success: {}
}

const posts = (state = initialState, action) => {
	switch (action.type) {
		case APP_CONSTANTS.POST_ADD_SUCCESS:
			return { ...state, post_add_success: action.payload };
			
		default:
			return state
	}
}

export default posts;