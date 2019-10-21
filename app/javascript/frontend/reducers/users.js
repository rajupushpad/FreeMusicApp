import { APP_CONSTANTS } from '../app_constants';

const initialState = {
	current_user: {}
}

const users = (state = initialState, action) => {
	switch (action.type) {
		case APP_CONSTANTS.CURRENT_USER:
			return { ...state, current_user: action.payload };
			
		default:
			return state
	}
}

export default users;